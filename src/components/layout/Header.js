import React from "react"
import { Link } from "gatsby"

import usePageLogo from "../../hooks/usePageLogo"

import { AppHeader } from "./theme/Header-theme"
import NavBar from "./NavBar"

export default function Header() {
  const logo = usePageLogo()

  return (
    <AppHeader>
      <div>
        <Link to="/">
          <img src={logo} alt="Logo de Bienes Raices" />
        </Link>

        <NavBar />
      </div>
    </AppHeader>
  )
}
