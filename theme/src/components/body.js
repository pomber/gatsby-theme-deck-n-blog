import React from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Intro, Content } from "./placeholders"
import splitSlides from "gatsby-theme-mdx-deck/src/split-slides"
import Slide from "gatsby-theme-mdx-deck/src/components/slide"
import Zoom from "gatsby-theme-mdx-deck/src/components/zoom"
import { ThemeProvider } from "theme-ui"

function getIntro(children) {
  const introElement = React.Children.toArray(children).find(
    c => c.props && c.props.originalType === Intro
  )
  return introElement && introElement.props && introElement.props.children
}

function getContent(children) {
  const contentElement = children.find(
    c => c.props && c.props.originalType === Content
  )
  return contentElement && contentElement.props && contentElement.props.children
}

const Wrapper = ({ children, theme = {}, ...props }) => {
  console.log({ props })
  const intro = getIntro(children)
  const slides = splitSlides({ children })
  // const contents = slides.map(getContent)
  const kids = [intro]
  slides.forEach((slide, i) => {
    kids.push(
      <ThemeProvider theme={theme} key={i}>
        <Zoom zoom={1} ratio={16 / 9}>
          <Slide slide={slide} preview />
        </Zoom>
      </ThemeProvider>
    )
    kids.push(getContent(slide))
  })
  return kids
}

const Body = ({ body }) => {
  return (
    <MDXRenderer components={{ wrapper: Wrapper }} body={body}>
      {body}
    </MDXRenderer>
  )
}

export default Body
