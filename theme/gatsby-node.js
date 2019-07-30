const PostTemplate = require.resolve(`./src/templates/post`)
const PostsTemplate = require.resolve(`gatsby-theme-blog/src/templates/posts`)

exports.createPages = async ({ graphql, actions, reporter, pathPrefix }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      site {
        siteMetadata {
          title
          social {
            name
            url
          }
        }
      }
      allDeck {
        edges {
          node {
            id
            slug
            title
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panic(result.errors)
  }

  const { allDeck } = result.data
  const decks = allDeck.edges

  decks.forEach(({ node }, index) => {
    const slug = "posts" + node.slug

    createPage({
      path: slug,
      component: PostTemplate,
      context: {
        ...node,
        slug,
      },
    })
  })

  const {
    site: { siteMetadata },
  } = result.data
  const { title: siteTitle, social: socialLinks } = siteMetadata

  // // Create the Posts page
  createPage({
    path: "/",
    component: PostsTemplate,
    context: {
      posts: decks,
      siteTitle,
      socialLinks,
    },
  })
}
