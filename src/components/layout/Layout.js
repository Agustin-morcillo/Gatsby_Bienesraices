import React from "react"
import Helmet from "react-helmet"

import GlobalStyle from "../globalStyle"
import Header from "./Header"
import Footer from "./Footer"

export default function Layout(props) {
  return (
    <>
      <GlobalStyle />

      <Helmet>
        <title>Bienes Raices Gatsby</title>
        <meta
          name="description"
          content="Sitio web de bienes raices en Gatsby"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Lato:300,400,700|Roboto:400,700&display=swap"
        />
      </Helmet>

      <Header />

      {props.children}

      <Footer title="Bienes Raices" />
    </>
  )
}
