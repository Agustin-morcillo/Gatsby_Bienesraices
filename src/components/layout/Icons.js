import React from "react"
import PropTypes from "prop-types"

import useIcons from "../../hooks/useIcons"

import { IconList } from "./theme/Icons-theme"

export default function Icons({ bathrooms, parking, rooms }) {
  const icons = useIcons()

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
