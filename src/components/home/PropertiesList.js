import React, { useState, useEffect } from "react"

import useProperties from "../../hooks/useProperties"

import { Title, List } from "./theme/PropertiesList-theme"
import PropertiePreview from "./PropertiePreview"
import useFilter from "../../hooks/useFilter"

export default function PropertiesList() {
  const propertiesList = useProperties()

  const [properties] = useState(propertiesList)
  const [filterResult, setFilterResult] = useState([])

  const { category, FilterInput } = useFilter()

  useEffect(() => {
    if (category) {
      const filter = properties.filter(
        (propertie) => propertie.node.categories[0].name === category
      )
      return setFilterResult(filter)
    }
    return setFilterResult(properties)
  }, [category])

  return (
    <div>
      <Title>Nuestras propiedades</Title>

      {FilterInput()}

      <List>
        {filterResult.map((propertie) => (
          <PropertiePreview
            key={propertie.node.id}
            propertie={propertie.node}
          />
        ))}
      </List>
    </div>
  )
}
