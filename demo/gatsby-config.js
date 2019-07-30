/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `My Talks`,
    author: `Name Placeholder`,
    description: `Description placeholder`,
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/pomber`,
      },
      {
        name: `github`,
        url: `https://github.com/pomber`,
      },
    ],
  },
  plugins: [
    {
      resolve: "gatsby-theme-deck-n-blog",
      options: {
        contentPath: "decks",
        blogBasePath: "posts",
        // decksBasePath: "deck",
      },
    },
  ],
}
