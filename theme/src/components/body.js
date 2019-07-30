import React from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Intro, Content } from "./placeholders"
import splitSlides from "gatsby-theme-mdx-deck/src/split-slides"

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

const Wrapper = ({ children }) => {
  const intro = getIntro(children)
  const slides = splitSlides({ children })
  const contents = slides.map(getContent)
  const body = [intro]
  slides.forEach((slide, i) => {
    body.push(slide)
    body.push(contents[i])
  })
  return body
}

const Body = ({ body }) => {
  return <MDXRenderer components={{ wrapper: Wrapper }}>{body}</MDXRenderer>
}

export default Body
