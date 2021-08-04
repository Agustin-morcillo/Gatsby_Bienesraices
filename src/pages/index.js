import * as React from "react"

import useHome from "../hooks/useHome"

import {
  Container,
  Image,
  WelcomeText,
} from "../components/home/theme/index-theme"
import Layout from "../components/layout/Layout"

const IndexPage = () => {
  const home = useHome()
  const { name, content, image } = home

  return (
    <Layout>
      <Image
        tag="section"
        fluid={image.localFile.sharp.fluid}
        alt="mansión"
        fadeIn="soft"
      >
        <WelcomeText>
          <h1>Venta de casas, departamentos y mansiones</h1>
        </WelcomeText>
      </Image>

      <main>
        <Container>
          <h1>{name}</h1>
          <p>{content}</p>
        </Container>
      </main>
    </Layout>
  )
}

export default IndexPage
