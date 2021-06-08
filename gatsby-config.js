module.exports = {
  siteMetadata: {
    title: "My Gatsby Site",
  },
  plugins: [
    `gatsby-plugin-breakpoints`,
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    'gatsby-plugin-anchor-links',
    `gatsby-plugin-typescript`,
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-plugin-sharp",
      options: {
        icon: 'src/images/favicon.jpg'
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "content",
        path: "./content/",
      },
      __key: "content",
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        // Footnotes mode (default: true)
        footnotes: true,
        // GitHub Flavored Markdown mode (default: true)
        gfm: true,
        // Plugins configs
        plugins: [],
      },
    }
  ],
  flags: {
    FAST_DEV: true,
    DEV_SSR: true,
  }
};
