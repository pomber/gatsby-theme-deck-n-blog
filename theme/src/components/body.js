/** @jsx jsx */
import React from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Intro, Content } from "./placeholders"
import splitSlides from "gatsby-theme-mdx-deck/src/split-slides"
import Slide from "gatsby-theme-mdx-deck/src/components/slide"
import Zoom from "gatsby-theme-mdx-deck/src/components/zoom"
import { jsx, ThemeProvider, useThemeUI } from "theme-ui"
import Wave from "gatsby-theme-waves/src/components/wave"
import BarScroller from "gatsby-theme-waves/src/components/bar-scroller"

function getIntro(children) {
  const introElement = React.Children.toArray(children).find(
    c => c.props && c.props.originalType === Intro
  )
  return introElement && introElement.props && introElement.props.children
}

function getContent(children) {
  const contentElement = React.Children.toArray(children).find(
    c => c.props && c.props.originalType === Content
  )
  return React.createElement(
    "div",
    {},
    contentElement && contentElement.props && contentElement.props.children
  )
}

const Wrapper = ({ children, theme = {}, ...props }) => {
  function childrenToColumns(children) {
    const slides = splitSlides({ children })
    const contents = slides.map(getContent)
    const slideElements = slides
      .map(slide =>
        slide.filter(
          c =>
            !c.props ||
            c.props.originalType !== Intro ||
            c.props.originalType !== Content
        )
      )
      .map((slide, i) => (
        <ThemeProvider theme={theme} key={i}>
          <Zoom zoom={1} ratio={16 / 9}>
            <Slide slide={slide} preview />
          </Zoom>
        </ThemeProvider>
      ))
    return [slideElements, contents]
  }

  const intro = getIntro(children)
  return (
    <div>
      {intro}
      <Wave
        columnComponents={[DeckSticker, BarScroller]}
        childrenToStepColumns={childrenToColumns}
      >
        {children}
      </Wave>
    </div>
  )
}

function DeckSticker({ steps, progress, variant, currentStep }) {
  const prevIndex = Math.floor(progress)
  const nextIndex = prevIndex + 1
  return (
    <div sx={{ variant: `styles.waves.${variant}.StickerContainer` }}>
      <div sx={{ variant: `styles.waves.${variant}.Sticker` }}>
        <div
          style={{ transform: `translateY(${(prevIndex - progress) * 50}%)` }}
        >
          {steps[prevIndex]}
          {steps[nextIndex]}
        </div>
      </div>
    </div>
  )
}

const Body = ({ body }) => {
  return (
    <MDXRenderer components={{ wrapper: Wrapper }} body={body}>
      {body}
    </MDXRenderer>
  )
}

export default Body
