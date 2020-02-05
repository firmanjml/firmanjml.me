import React from "react"
import { Link, useStaticQuery, graphql } from 'gatsby';

import Layout from "../components/layout";
import blogStyle from '../components/blog.module.scss';
import Title from "../components/title";

const BlogPage = () => {
    const data = useStaticQuery(graphql`
        query {
            allContentfulBlogPost(sort: {order: DESC, fields: publishedDate}) {
                edges {
                    node {
                        title
                        slug
                        publishedDate(formatString: "MMMM Do, YYYY")
                    }
                }
            }
        }
    `);
    return (
        <Layout>
            <Title text="Blog" />
            <h1>Blogs</h1>
            {
                data.allContentfulBlogPost.edges.length > 0 ?
                    <ol className={blogStyle.posts}>
                        {
                            data.allContentfulBlogPost.edges.map((edge) => (
                                <li className={blogStyle.post}>
                                    <Link to={`/blog/${edge.node.slug}`}>
                                        <h2>{edge.node.title}</h2>
                                        <p>{edge.node.publishedDate}</p>
                                    </Link>
                                </li>
                            ))
                        }
                    </ol>
                    :
                    <p>No posts at the moment.</p>
            }
        </Layout>
    )
}

export default BlogPage;