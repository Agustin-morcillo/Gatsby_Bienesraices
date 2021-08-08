import { useStaticQuery, graphql } from "gatsby"

export default function homeSectionImgQuery() {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "home-section.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            width: 2000
            quality: 50
            webpOptions: { quality: 70 }
          )
        }
      }
    }
  `)
  return image
}
