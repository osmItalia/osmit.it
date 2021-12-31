module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "osmit",
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `OSM Italia`,
        short_name: `OSMIT`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#00a9b2`,
        display: `standalone`,
        icon: `src/images/OSMItaly.svg`
      },
    },
  ],
};
