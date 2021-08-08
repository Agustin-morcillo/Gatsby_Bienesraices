import * as React from "react"
import { getImage, GatsbyImage } from "gatsby-plugin-image"

import nosotrosPageQuery from "../queries/nosotros/nosotrosPageQuery"

import { Title, Card } from "../components/nosotros/theme/Nosotros-theme"
import Layout from "../components/layout/Layout"

const About = () => {
  const { name, content, image } = nosotrosPageQuery()
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
      </main>
    </Layout>
  )
}

export default About
