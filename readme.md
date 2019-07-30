# Deck 'n' Blog

You write the MDX for your [mdx-deck](https://github.com/jxnblk/mdx-deck)s, and this Gatsby theme creates the deck and the blog post for you.

## Installation

To use this theme in your Gatsby sites, follow these instructions:

0. Init your Gatsby site (skip this if you already have a site)

   ```sh
   npx gatsby new my-gatsby-site https://github.com/gatsbyjs/gatsby-starter-default
   cd my-gatsby-site
   ```

1. Install the theme

   ```sh
   npm install --save gatsby-theme-deck-n-blog
   ```

1. Add the theme to your `gatsby-config.js`:

   ```js
   module.exports = {
     plugins: ["gatsby-theme-deck-n-blog"]
   };
   ```

1. Create a deck in `decks/my-deck.mdx`

   ```md
   ---
   title: The Restaurant
   date: 1980-10-12
   ---

   import { Intro, Content } from "gatsby-theme-deck-n-blog"

   <Intro>

   This will only appear in the blog post as an intro an as the excerpt.

   </Intro>

   # Slide 1

   <Content>

   This will appear in the blog post together with the slide 1

   </Content>

   ---

   # Slide 2

   <Content>

   This will appear in the blog post together with the slide 2

   </Content>
   ```

1. Start your site

   ```sh
   npm run start
   ```
