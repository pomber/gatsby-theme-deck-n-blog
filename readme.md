# Deck 'n' Blog

You write the MDX for your [mdx-deck](https://github.com/jxnblk/mdx-deck)s, and this Gatsby theme creates the deck and the blog post for you.

## Installation

To use this theme in your Gatsby sites, follow these instructions:

1. Init your Gatsby site

   ```sh
   mkdir my-gastby-site
   cd my-gastby-site
   npm install --save react react-dom gatsby gatsby-theme-deck-n-blog
   npm init -y
   ```

1. Create `gatsby-config.js`:

   ```js
   module.exports = {
     plugins: ["gatsby-theme-deck-n-blog"]
   };
   ```

1. Create a deck in `decks/my-deck.mdx`

   ```md
   ---
   title: The Title
   date: 1986-02-20
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

1. **Create another deck** (yes, you need to create at least two decks!) in `decks/another-deck.mdx`

1. Start your site

   ```sh
   npx gatsby develop
   ```
