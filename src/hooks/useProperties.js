import { useStaticQuery, graphql } from "gatsby"

export default function useProperties() {
  const data = useStaticQuery(graphql`
    query {
      allStrapiProperties {
        edges {
          node {
            id
            name
            description
            price
            rooms
            bathrooms
            parking
            price
            rooms
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
            category {
              name
            }
            agent {
              name
              email
              phone
            }
          }
        }
      }
    }
  `)
  return data.allStrapiProperties.edges
}
