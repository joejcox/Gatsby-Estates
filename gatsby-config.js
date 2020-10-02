/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 *
 */

const path = require("path")
require("dotenv").config({
  path: `.env.${process.env.GATSBY_ENV}`,
})

module.exports = {
  plugins: [
    "gatsby-plugin-sass",
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-transition-link`,
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        nm: path.join(__dirname, "node_modules"),
        src: path.join(__dirname, "src"),
        images: path.join(__dirname, "src/assets/images"),
        components: path.join(__dirname, "src/components"),
        pages: path.join(__dirname, "src/pages"),
      },
    },
  ],
}
exports.onCreatePage = async ({ page, actions }) => {
  const { createPage, deletePage } = actions
  // Check if the page is a localized 404
  if (page.path.match(/^\/[a-z]{2}\/404\/$/)) {
    const oldPage = { ...page }
    // Get the language code from the path, and match all paths
    // starting with this code (apart from other valid paths)
    const langCode = page.path.split(`/`)[1]
    page.matchPath = `/${langCode}/*`
    // Recreate the modified page
    deletePage(oldPage)
    createPage(page)
  }
}
