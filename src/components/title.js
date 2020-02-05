import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Helmet } from 'react-helmet';

const Title = ({ text }) => {
    const data = useStaticQuery(graphql`
    query {
        site {
          siteMetadata {
            title
          }
        }
    }
    `);

    return (
        <Helmet title={`${data.site.siteMetadata.title} - ${text}`} />
    )
}

export default Title;