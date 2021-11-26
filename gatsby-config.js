module.exports = {
  siteMetadata: {
    en: {
      title: `Coronavirus (COVID-19) self-assessment`,
      description: `Take this self-assessment if you think you have coronavirus (COVID-19) or have been in close contact with someone who has it.`,
      author: `@ONThealth`,
      twitter_site: `@ONThealth`,
      og_url: `https://covid-19.ontario.ca/self-assessment`,
      og_title: `COVID-19 Self Assessment for Ontarians`,
      og_image: `https://covid-19.ontario.ca/covid-19-sat-assets/social_image_en.png`,
      og_locale: `en_CA`,
    },
    fr: {
      title: `Autoévaluation - nouveau coronavirus (COVID-19)`,
      description: `Si vous croyez que vous présentez des symptômes du coronavirus 2019 (COVID-19) ou si vous avez été en contact étroit avec une personne l’ayant contracté, servez-vous de cet outil d’autoévaluation pour vous aider à déterminer si vous avez besoin de recevoir d’autres soins...`,
      author: `@ONThealth`,
      twitter_site: `@ONThealth`,
      og_url: `https://covid-19.ontario.ca/autoevaluation`,
      og_title: `Autoévaluation COVID-19 pour les Ontariens`,
      og_image: `https://covid-19.ontario.ca/covid-19-sat-assets/social_image_fr.png`,
      og_locale: `fr_CA`,
    },
  },
  assetPrefix: "covid-19-sat-assets",
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-build-date`,
    {
      resolve: `gatsby-plugin-react-helmet-canonical-urls`,
      options: {
        siteUrl: `https://covid-19.ontario.ca`,
      },
    },
    {
      resolve: "gatsby-plugin-preconnect",
      options: {
        domains: ["https://www.google-analytics.com", "https://www.googletagmanager.com"],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `stylesheets`,
        path: `${__dirname}/src/stylesheets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `fonts`,
        path: `${__dirname}/src/fonts`,
      },
    },
    {
      resolve: "gatsby-plugin-anchor-links",
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `covid-19-self-assessment-tool-v3`,
        short_name: `covid-19-sat-v3`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/ontario-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-asset-path",
      options: {
        removeMapFiles: true,
        fileTypes: ["js", "map", "css", "png"],
      },
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GA_CODE",

        // Include GTM in development.
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false,

        // datalayer to be set before GTM is loaded
        // should be an object or a function that is executed in the browser
        // Defaults to null
        defaultDataLayer: { platform: "gatsby" },

        // Specify optional GTM environment details.
        // gtmAuth: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_AUTH_STRING",
        // gtmPreview: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_PREVIEW_NAME",
        // dataLayerName: "YOUR_DATA_LAYER_NAME",
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
