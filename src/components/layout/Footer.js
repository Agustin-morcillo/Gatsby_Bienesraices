import React from "react"
import PropTypes from "prop-types"

import { AppFooter, GoToHome, Rights } from "./theme/Footer-theme"
import NavBar from "./NavBar"

export default function Footer({ title }) {
  const year = new Date().getFullYear()
  return (
    <>
      <AppFooter>
        <div>
          <NavBar />

          <GoToHome to="/">
            <h1>BienesRaices</h1>
          </GoToHome>
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
