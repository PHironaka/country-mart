const path = require('path');

module.exports = {
  siteTitle: `The Fireplace Project`,
  siteTitleShort: `Fireplace`,
  siteDescription: `The Fireplace Project in East Hampton, New York, is a contemporary art gallery that features solo and group exhibitions, and artistsí projects. It is located in the former Talmage garage at 851 Springs Fireplace Road, in the Springs historic district across from the Pollock-Krasner house. `,
  siteUrl: `https://thefireplaceproject.com`,
  themeColor: `#000`,
  backgroundColor: `#fff`,
  pathPrefix: null,
  logo: path.resolve(__dirname, 'src/images/icon.png'),
  social: {
    twitter: `gatsbyjs`,
    fbAppId: `966242223397117`,
  },
};
