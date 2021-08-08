import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import usePageLogo from "../../hooks/usePageLogo"

import { AppFooter, Rights } from "./theme/Footer-theme"
import NavBar from "./NavBar"

export default function Footer({ title }) {
  const logo = usePageLogo()
  const year = new Date().getFullYear()

  return (
    <>
      <AppFooter>
        <div>
          <NavBar />

          <Link to="/">
            <img src={logo} alt="Logo de Bienes Raices" />
          </Link>
        </div>
      </AppFooter>
      <Rights>
        {title}. Todos los derechos Reservados {year} &copy;
      </Rights>
    </>
  )
}

Footer.propTypes = {
  title: PropTypes.string,
}
