import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"

import Layout from "../layout/Layout"

export const query = graphql`
  query ($id: String!) {
    allStrapiProperties(filter: { id: { eq: $id } }) {
      nodes {
        name
        parking
      }
    }
  }
`

export default function PropertieDetails({ data }) {
  console.log(data)
  return (
    <Layout>
      <h2>Funciono</h2>
    </Layout>
  )
}

PropertieDetails.propTypes = {
  data: PropTypes.object,
}
