/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Firman Jamal",
    author: "firmanjml",
    twitterHandle: '@firmanjml',
    instagramHandle: '@firmanjml',
    email: 'firman.jamal96@gmail.com'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.SPACE_ID,
        accessToken: process.env.ACCESSS_TOKEN
      }
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-sharp'
  ]
}
