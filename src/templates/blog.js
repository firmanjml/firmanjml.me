import React from 'react';
import { graphql } from 'gatsby';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import Head from '../components/head';
import Layout from '../components/layout';

export const query = graphql`
    query($slug: String!) {
        contentfulBlogPost(
            slug: {
                eq: $slug
            }
        ) {
            title
            publishedDate(formatString: "MMMM Do, YYYY")
            body {
                json
            }
        }
    }
`;

const Blog = (props) =>  {
    return (
        <Layout>
            <Head title={props.data.contentfulBlogPost.title}/>
            <h1>
                {
                    props.data.contentfulBlogPost.title
                }
            </h1>
            <p>
                {
                    props.data.contentfulBlogPost.publishedDate
                }
            </p>
            <div>
            {
                documentToReactComponents(props.data.contentfulBlogPost.body.json, {
                    renderNode: {
                        "embedded-asset-block": (node) => {
                            return <img src={node.data.target.fields.file['en-US'].url} alt={node.data.target.fields.title['en-US']}  />
                        }
                    }
                })
            }
            </div>
            {/* <div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}></div> */}
        </Layout>
    )
}

export default Blog;