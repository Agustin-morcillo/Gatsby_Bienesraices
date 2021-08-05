import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import { Image, Text } from "./theme/SectionImg-theme"

export default function SectionImg() {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "home-section.jpg" }) {
        sharp: childImageSharp {
          fluid(quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <>
      <Image tag="section" fluid={image.sharp.fluid} fadeIn="soft">
        <Text>
          <h3>Enuentra la casa de tus sueños</h3>
          <p>15 años de experiencia</p>
        </Text>
      </Image>
    </>
  )
}
