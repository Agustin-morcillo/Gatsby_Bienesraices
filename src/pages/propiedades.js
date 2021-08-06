import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import { Title, Card } from "../components/properties/theme/Propiedades-theme"
import Layout from "../components/layout/Layout"
import PropertiesList from "../components/home/PropertiesList"

const Properties = () => {
  const query = useStaticQuery(graphql`
    {
      allStrapiPages(filter: { name: { eq: "Propiedades" } }) {
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

  return (
    <Layout>
      <main>
        <section>
          <Title>{name}</Title>
          <Card>
            <GatsbyImage
              image={image.localFile.childImageSharp.gatsbyImageData}
              alt={name}
            />
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
