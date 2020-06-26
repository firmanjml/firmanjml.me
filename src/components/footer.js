import React from 'react';
import { useStaticQuery, graphql} from 'gatsby';

import footerStyles from './modules/footer.module.scss';
const Footer = () => {
    var date = new Date();
    const data = useStaticQuery(graphql`
    query {
        site {
          siteMetadata {
            author
          }
        }
    }
    `);
    return (
        <footer className={footerStyles.footer}>
          <p>Written by {data.site.siteMetadata.author}, © 2019-{date.getFullYear()}</p>
        </footer>
    )
}

export default Footer;
