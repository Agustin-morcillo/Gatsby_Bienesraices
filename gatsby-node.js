exports.createPages = async ({ graphql, reporter, actions }) => {
  const result = await graphql(`
    query {
      allStrapiProperties {
        edges {
          node {
            id
            name
          }
        }
      }
    }
  `)

  /* Errors */
  if (result.errors) {
    reporter.panic("No hubo resultados ", result.errors)
  }

  /* Query Success */
  const properties = result.data.allStrapiProperties.edges

  properties.forEach((propertie) => {
    actions.createPage({
      path: propertie.node.name.split(" ").join("-"),
      component: require.resolve(
        "./src/components/properties/PropertieDetails.js"
      ),
      context: {
        id: propertie.node.id,
      },
    })
  })
}
