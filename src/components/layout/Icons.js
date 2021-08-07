import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import { IconList } from "./theme/Icons-theme"

export default function Icons({ bathrooms, parking, rooms }) {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { relativeDirectory: { eq: "icons" } }) {
        edges {
          node {
            id
            publicURL
            name
          }
        }
      }
    }
  `)
  const icons = data.allFile.edges

  return (
    <IconList>
      {icons.map((icon) => (
        <li key={icon.node.id}>
          <img src={icon.node.publicURL} alt={icon.node.name} />
          {icon.node.name === "bathrooms" && <p>{bathrooms}</p>}
          {icon.node.name === "parking" && <p>{parking}</p>}
          {icon.node.name === "rooms" && <p>{rooms}</p>}
        </li>
      ))}
    </IconList>
  )
}

Icons.propTypes = {
  bathrooms: PropTypes.number,
  parking: PropTypes.number,
  rooms: PropTypes.number,
}
