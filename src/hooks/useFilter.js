import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"

import { Form, Select } from "../components/layout/theme/useFilter-theme"

export default function useFilter() {
  const [category, setCategory] = useState("")

  const result = useStaticQuery(graphql`
    query {
      allStrapiCategories {
        edges {
          node {
            id
            name
          }
        }
      }
    }
  `)
  const categories = result.allStrapiCategories.edges

  function FilterInput() {
    return (
      <Form>
        <Select onChange={(e) => setCategory(e.target.value)} value={category}>
          <option value="">-- Filtrar --</option>
          {categories.map((category) => (
            <option value={category.node.name} key={category.node.id}>
              {category.node.name}
            </option>
          ))}
        </Select>
      </Form>
    )
  }

  return {
    category,
    FilterInput,
  }
}
