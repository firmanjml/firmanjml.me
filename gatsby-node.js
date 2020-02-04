const path = require('path');

module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;

    const component = path.resolve('./src/templates/blog.js');
    const response = await graphql(`
    query {
        allContentfulBlogPost {
            edges {
                node {
                    slug
                }
            }
        }
    }`);

    response.data.allContentfulBlogPost.edges.forEach((edge) => {
        createPage({
            component,
            path: `/blog/${edge.node.slug}`,
            context: {
                slug: edge.node.slug
            }
        })
    })
}