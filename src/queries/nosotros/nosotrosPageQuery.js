import { useStaticQuery, graphql } from "gatsby"

export default function nosotrosPageQuery() {
  const query = useStaticQuery(graphql`
    {
      allStrapiPages(filter: { name: { eq: "Nosotros" } }) {
        edges {
          node {
            id
            name
            content
            image {
              localFile {
                childImageSharp {
                  gatsbyImageData(
                    width: 1000
                    quality: 50
                    webpOptions: { quality: 70 }
                  )
                }
              }
            }
          }
        }
      }
    }
  `)
  return query.allStrapiPages.edges[0].node
}
