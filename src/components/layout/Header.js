import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import { AppHeader } from "./theme/Header-theme"
import NavBar from "./NavBar"

export default function Header() {
  const { logo } = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo.svg" }) {
        publicURL
      }
    }
  `)

  return (
    <AppHeader>
      <div>
        <Link to="/">
          <img src={logo.publicURL} alt="Logo de Bienes Raices" />
        </Link>

        <NavBar />
      </div>
    </AppHeader>
  )
}
