import React from 'react';
import { graphql } from 'gatsby';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Title from '../components/title';
import Layout from '../components/layout';
import _ from 'lodash';

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
            <Title text={props.data.contentfulBlogPost.title}/>
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
                        "paragraph": (node, children) => {
                            if (node.content.length === 1 && _.find(node.content[0].marks, {type: 'code'})) {
                                return <pre><code>{node.content[0].value}</code></pre>;
                            }

                            return <p>{children}</p>
                        },
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