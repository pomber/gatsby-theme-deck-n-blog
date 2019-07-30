import wavesTheme from "gatsby-theme-waves/src/gatsby-plugin-theme-ui/index"
import blogTheme from "gatsby-theme-blog/src/gatsby-plugin-theme-ui/index"
import decksTheme from "gatsby-theme-mdx-deck/src/gatsby-plugin-theme-ui/index"
import merge from "deepmerge"

export default merge.all([decksTheme, blogTheme, wavesTheme])
