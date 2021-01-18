const { graphql } = require("gatsby")
const { createRemoteFileNode } = require(`gatsby-source-filesystem`)

exports.createPages = ({graphql, actions}) => {
    const query = graphql(`
        {
            wpcontent {
                cars {
                    edges {
                        node {
                            slug
                            id
                        }
                    }
                }
            }
        }
    `).then(result => {
        if (result.errors) {
            result.errors.forEach(e => console.log(e.toString()))
            return Promise.reject(result.errors);
        }
        const cars = result.data.wpcontent.cars.edges;
        console.log(cars, "console log cars data")
    })
}

/* Aan de hand van dit stukje code worden de images vanuit WPgraphql omgezet tot images waarop Gatsby image optimization kan toepassen */
exports.createResolvers = async ({
  actions,
  cache,
  createNodeId,
  createResolvers,
  store,
  reporter,
}) => {
  const { createNode } = actions

  await createResolvers({
    WPGraphql_MediaItem: {
      imageFile: {
        type: "File",
        async resolve(source) {
          let sourceUrl = source.sourceUrl

          if (source.mediaItemUrl !== undefined) {
            sourceUrl = source.mediaItemUrl
          }

          return await createRemoteFileNode({
            url: encodeURI(sourceUrl),
            store,
            cache,
            createNode,
            createNodeId,
            reporter,
          })
        },
      },
    },
  })
}
