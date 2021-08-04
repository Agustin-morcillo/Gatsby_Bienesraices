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
                sharp: childImageSharp {
                  fluid(
                    quality: 90
                    maxWidth: 1200
                    duotone: {
                      highlight: "#222222"
                      shadow: "#192550"
                      opacity: 40
                    }
                  ) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
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
