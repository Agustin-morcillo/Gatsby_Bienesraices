import React from "react"
import { getImage } from "gatsby-plugin-image"

import homeSectionImgQuery from "../../queries/home/homeSectionImgQuery"

import { Image, Text } from "./theme/SectionImg-theme"

export default function SectionImg() {
  const image = homeSectionImgQuery()
  const imagePath = getImage(image)

  return (
    <>
      <Image alt="habitación" image={imagePath}>
        <Text>
          <h3>Encuentra la casa de tus sueños</h3>
          <p>15 años de experiencia</p>
        </Text>
      </Image>
    </>
  )
}
