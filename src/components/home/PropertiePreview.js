import React from "react"
import PropTypes from "prop-types"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import NumberFormat from "react-number-format"

import { Card, Content, Button } from "./theme/PropertiePreview-theme"
import Icons from "../layout/Icons"

export default function PropertiePreview({ propertie }) {
  const { name, price, image, bathrooms, parking, rooms } = propertie
  const imagePath = getImage(image.localFile)

  const propertieURL = name.split(" ").join("-")

  return (
    <article>
      <Card>
        <GatsbyImage image={imagePath} alt="casa" />
        <Content>
          <h3>{name}</h3>
          <NumberFormat
            value={price}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
            className="price"
          />

          <Icons bathrooms={bathrooms} parking={parking} rooms={rooms} />

          <Button to={"/" + propertieURL}>Ver detalles</Button>
        </Content>
      </Card>
    </article>
  )
}

PropertiePreview.propTypes = {
  propertie: PropTypes.object,
}
