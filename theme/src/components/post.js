import React from "react"
import { Styled, css, ThemeProvider, ColorMode } from "theme-ui"

import PostFooter from "gatsby-theme-blog/src/components/post-footer"
import Layout from "gatsby-theme-blog/src/components/layout"
import SEO from "gatsby-theme-blog/src/components/seo"

import blogTheme from "gatsby-theme-blog/src/gatsby-plugin-theme-ui/index"
import waves from "./waves"
import Body from "./body"
import deepmerge from "deepmerge"

const Post = ({
  data: {
    post,
    site: {
      siteMetadata: { title },
    },
  },
  location,
  previous,
  next,
}) => {
  return (
    <ThemeProvider theme={deepmerge(blogTheme, { styles: { waves } })}>
      <ColorMode />
      <Layout location={location} title={title}>
        <SEO title={post.title} description={post.excerpt} />
        <main>
          <Styled.h1>{post.title}</Styled.h1>
          <Styled.p
            css={css({
              fontSize: 1,
              mt: -3,
              mb: 3,
            })}
          >
            {post.date}
          </Styled.p>
          <Body body={post.body} />
        </main>
        <PostFooter {...{ previous, next }} />
      </Layout>
    </ThemeProvider>
  )
}

export default Post
