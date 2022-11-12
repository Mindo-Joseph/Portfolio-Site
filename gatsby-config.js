
require('dotenv').config();

const { ACCESS_TOKEN, SPACE_ID, ANALYTICS_ID, DETERMINISTIC } = process.env;

const plugins = [
  'gatsby-plugin-react-helmet',
  'gatsby-plugin-typescript',
  'gatsby-plugin-styled-components',
  'gatsby-transformer-remark',
  {
    resolve: 'gatsby-plugin-manifest',
    options: {
      name: `Joe Mindo Portfolio`,
      short_name: 'joe',
      start_url: '/',
background_color : "#FFFFFF",

theme_color : "#364f6b",

      display: 'minimal-ui',
      icon: 'media/icon.png',
    },
  },
  'gatsby-plugin-offline',
  {
    resolve: 'gatsby-source-contentful',
    options: {
spaceId : process.env.CONTENTFUL_SPACE_ID,

accessToken : process.env.CONTENTFUL_ACCESS_TOKEN,

    },
  },
  {
    resolve: 'gatsby-source-medium',
    options: {
      username: 'ndirangumindo' || '@medium',
    },
  },
];

if (ANALYTICS_ID) {
  plugins.push({
    resolve: 'gatsby-plugin-google-analytics',
    options: {
      trackingId: ANALYTICS_ID,
    },
  });
}

module.exports = {
  plugins,
  siteMetadata: {
    isMediumUserDefined: !! 'ndirangumindo',
    deterministic: !!DETERMINISTIC,
  },
};
