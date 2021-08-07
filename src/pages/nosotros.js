import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { getImage, GatsbyImage } from "gatsby-plugin-image"

import { Title, Card } from "../components/nosotros/theme/Nosotros-theme"
import Layout from "../components/layout/Layout"

const About = () => {
  const query = useStaticQuery(graphql`
    {
      allStrapiPages(filter: { name: { eq: "Nosotros" } }) {
        edges {
          node {
            id
            name
            content
            image {
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
          }
        }
      }
    }
  `)

  const data = query.allStrapiPages.edges[0].node
  const { name, content, image } = data
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
