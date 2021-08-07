import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { getImage } from "gatsby-plugin-image"

import { Image, Text } from "./theme/SectionImg-theme"

export default function SectionImg() {
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
  const imagePath = getImage(image)

  return (
    <>
      <Image alt="habitación" image={imagePath}>
        <Text>
          <h3>Enuentra la casa de tus sueños</h3>
          <p>15 años de experiencia</p>
        </Text>
      </Image>
    </>
  )
}
