import { useStaticQuery, graphql } from "gatsby"

export default function useIcons() {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { relativeDirectory: { eq: "icons" } }) {
        edges {
          node {
            id
            publicURL
            name
          }
        }
      }
    }
  `)
  return data.allFile.edges
}
