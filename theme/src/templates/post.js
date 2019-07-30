import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Embed from "../components/embed"
import Post from "../components/post"

export const pageQuery = graphql`
  query($id: String!) {
    deck: deck(id: { eq: $id }) {
      id
      body
      slug
      title
    }
    site: site {
      siteMetadata {
        title
      }
    }
  }
`

export default ({ data: { deck, site }, location, ...props }) => {
  return <Post data={{ post: deck, site }} location={location} />
  // return <Embed src={MDXRenderer} children={deck.body} slide={1} zoom={0.6} />
}
