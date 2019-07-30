import React from "react"
import { ThemeProvider } from "theme-ui"
import mdxDeckTheme from "gatsby-theme-mdx-deck/src/gatsby-plugin-theme-ui/index"
import Deck from "gatsby-theme-mdx-deck/src/components/deck"

export default props => (
  <ThemeProvider theme={mdxDeckTheme}>
    <Deck {...props} />
  </ThemeProvider>
)
