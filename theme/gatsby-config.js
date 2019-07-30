module.exports = ({
  contentPath = "decks",
  blogBasePath = "posts",
  decksBasePath,
}) => ({
  plugins: [
    {
      resolve: "gatsby-theme-blog",
      options: { mdx: false, contentPath, basePath: blogBasePath },
    },
    {
      resolve: "gatsby-theme-mdx-deck",
      options: { contentPath, basePath: decksBasePath },
    },
  ],
})
