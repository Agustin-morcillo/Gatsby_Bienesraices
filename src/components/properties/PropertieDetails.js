import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import NumberFormat from "react-number-format"

import { Card, Sidebar } from "./theme/PropertieDetails-theme"
import Layout from "../layout/Layout"
import Icons from "../layout/Icons"

export const query = graphql`
  query ($id: String!) {
    allStrapiProperties(filter: { id: { eq: $id } }) {
      nodes {
        name
        description
        price
        bathrooms
        parking
        rooms
        image {
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        agent {
          name
          email
          phone
        }
      }
    }
  }
`

export default function PropertieDetails({ data }) {
  const main = data.allStrapiProperties.nodes[0]
  const { name, description, price, bathrooms, parking, rooms, image, agent } =
    main

  return (
    <Layout>
      <main>
        <section>
          <article>
            <h1>{name}</h1>
            <Card>
              <div>
                <GatsbyImage
                  image={image.localFile.childImageSharp.gatsbyImageData}
                  alt={name}
                />
                <p>{description}</p>
              </div>

              <Sidebar>
                <span>
                  Precio:{" "}
                  <NumberFormat
                    value={price}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"$"}
                    className="price"
                  />
                </span>

                <Icons bathrooms={bathrooms} parking={parking} rooms={rooms} />

                <div>
                  <h2>Vendedor:</h2>
                  <p>{agent.name}</p>
                  <p>Email: {agent.email}</p>
                  <p>Tel: {agent.phone}</p>
                </div>
              </Sidebar>
            </Card>
          </article>
        </section>
      </main>
    </Layout>
  )
}

PropertieDetails.propTypes = {
  data: PropTypes.object,
}
