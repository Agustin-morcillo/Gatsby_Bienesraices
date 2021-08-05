import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import { IconList } from "./theme/Icons-theme"

export default function Icons({ bathrooms, parking, rooms }) {
  const icons = useStaticQuery(graphql`
    query {
      allFile(filter: { relativeDirectory: { eq: "icons" } }) {
        edges {
          node {
            id
            publicURL
          }
        }
      }
    }
  `)
  const finalIcons = icons.allFile.edges
  return (
    <IconList>
      <li>
        <img src={finalIcons[0].node.publicURL} alt="" />
        <p>{bathrooms}</p>
      </li>

      <li>
        <img src={finalIcons[1].node.publicURL} alt="" />
        <p>{rooms}</p>
      </li>

      <li>
        <img src={finalIcons[2].node.publicURL} alt="" />
        <p>{parking}</p>
      </li>
    </IconList>
  )
}

Icons.propTypes = {
  bathrooms: PropTypes.number,
  parking: PropTypes.number,
  rooms: PropTypes.number,
}
