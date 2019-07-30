/** @jsx jsx */
import { jsx, ThemeProvider } from "theme-ui"
import splitSlides from "gatsby-theme-mdx-deck/src/split-slides"
import Slide from "gatsby-theme-mdx-deck/src/components/slide"
import Zoom from "gatsby-theme-mdx-deck/src/components/zoom"

const wrapper = ({ slide: i, ratio, zoom, theme, ...props }) => {
  const slides = splitSlides(props)
  const slide = slides[i - 1]

  if (!slide) {
    return <pre>No slide found (slide {i})</pre>
  }

  return (
    <ThemeProvider theme={theme || {}}>
      <Zoom zoom={zoom} ratio={ratio}>
        <Slide slide={slide} preview />
      </Zoom>
    </ThemeProvider>
  )
}

const components = {
  wrapper,
}

export const Embed = ({
  src: Deck,
  slide = 1,
  ratio = 16 / 9,
  zoom = 1,
  ...props
}) => (
  <Deck
    {...props}
    components={components}
    slide={slide}
    ratio={ratio}
    zoom={zoom}
  />
)

export default Embed
