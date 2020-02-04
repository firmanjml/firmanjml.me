import React from "react"
import { graphql, useStaticQuery } from 'gatsby';

import Head from "../components/head";
import Layout from "../components/layout";

const ContactPage = () => {
    const data = useStaticQuery(graphql`
    {
        site {
            siteMetadata {
                twitterHandle
            }
        }
    }
    `)
    return (
        <Layout>
            <Head title="Contact"/>
            <h1>Contact</h1>
            <p>You can reach me via <a href={`https://www.twitter.com/${data.site.siteMetadata.twitterHandle}`} target='_blank' rel="noopener noreferrer">{data.site.siteMetadata.twitterHandle}</a> on Twitter or.. </p>
            <ul>
                <li>Email <a href="mailto:firman.jamal96@gmail.com">firman.jamal96@gmail.com</a></li>
                <li>Fiverr <a href="https://www.fiverr.com/firmanjamal">@firmanjamal</a></li>
            </ul>
        </Layout>
    )
}

export default ContactPage;