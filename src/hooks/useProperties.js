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
                  gatsbyImageData
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
