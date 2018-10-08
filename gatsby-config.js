const {
  siteTitle,
  siteTitleShort,
  siteDescription,
  siteUrl,
  themeColor,
  social,
} = require('./site-config');

module.exports = {
  siteMetadata: {
    siteTitle,
    siteTitleShort,
    siteDescription,
    siteUrl,
    themeColor,
    social,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-offline`,
    `gatsby-transformer-json`,
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/posts`,
        name: 'posts'
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
};
