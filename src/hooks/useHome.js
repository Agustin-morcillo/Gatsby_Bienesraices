import { useStaticQuery, graphql } from "gatsby"

export default function useHome() {
  const result = useStaticQuery(graphql`
    query {
      allStrapiPages(filter: { name: { eq: "Inicio" } }) {
        edges {
          node {
            name
            content
            image {
              localFile {
                childImageSharp {
                  gatsbyImageData(
                    width: 2000
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
  return result.allStrapiPages.edges[0].node
}
