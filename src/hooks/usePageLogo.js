import { useStaticQuery, graphql } from "gatsby"

export default function usePageLogo() {
  const { logo } = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo.svg" }) {
        publicURL
      }
    }
  `)
  return logo.publicURL
}
