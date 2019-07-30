import React from "react"

import Home from "../components/home"

// TODO shadow blog/templates/posts
// TODO shadow blog/templates/decks

export const pageQuery = graphql`
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
    allBlogPost(sort: { fields: [date, title], order: DESC }, limit: 1000) {
      edges {
        node {
          id
          excerpt
          slug
          title
          date(formatString: "MMMM DD, YYYY")
          parent {
            id
          }
        }
      }
    }
    allDeck {
      edges {
        node {
          id
          slug
          title
          parent {
            id
          }
        }
      }
    }
  }
`

export default ({ data, location }) => {
  console.log({ data })
  const { site, allBlogPost, allDeck } = data
  const { title: siteTitle, social: socialLinks } = site.siteMetadata
  const posts = allBlogPost.edges.map(e => e.node)
  const decks = allDeck.edges.map(e => e.node)

  const deckposts = posts.map(post => {
    const deck = decks.find(deck => deck.parent.id === post.parent.id)
    return {
      title: post.title || deck.title || deck.slug,
      excerpt: post.excerpt,
      date: post.date,
      keywords: post.keywords,
      postSlug: post.slug,
      deckSlug: deck.slug,
    }
  })

  return (
    <Home
      location={location}
      deckposts={deckposts}
      siteTitle={siteTitle}
      socialLinks={socialLinks}
    />
  )
}
