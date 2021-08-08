import * as React from "react"
import { getImage, GatsbyImage } from "gatsby-plugin-image"

import propiedadesPageQuery from "../queries/propiedades/propiedadesPageQuery"

import { Title, Card } from "../components/properties/theme/Propiedades-theme"
import Layout from "../components/layout/Layout"
import PropertiesList from "../components/home/PropertiesList"

const Properties = () => {
  const { name, content, image } = propiedadesPageQuery()
  const imagePath = getImage(image.localFile)

  return (
    <Layout>
      <main>
        <section>
          <Title>{name}</Title>
          <Card>
            <GatsbyImage image={imagePath} alt={name} />
            <p>{content}</p>
          </Card>
        </section>

        <section>
          <PropertiesList />
        </section>
      </main>
    </Layout>
  )
}

export default Properties
