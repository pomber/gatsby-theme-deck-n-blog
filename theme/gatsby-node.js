const HomeTemplate = require.resolve(`./src/templates/home`)

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  createPage({
    path: "/",
    component: HomeTemplate,
  })
}
