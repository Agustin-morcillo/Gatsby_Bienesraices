import React, { useState, useEffect } from "react"

import useProperties from "../../hooks/useProperties"

import { List } from "./theme/PropertiesList-theme"
import PropertiePreview from "./PropertiePreview"

export default function PropertiesList() {
  const [properties, setProperties] = useState([])
  const propertiesList = useProperties()

  useEffect(() => {
    setProperties(propertiesList)
  }, [])

  return (
    <div>
      <h2>Nuestras propiedades</h2>

      <List>
        {properties.map((propertie) => (
          <PropertiePreview
            key={propertie.node.id}
            propertie={propertie.node}
          />
        ))}
      </List>
    </div>
  )
}
