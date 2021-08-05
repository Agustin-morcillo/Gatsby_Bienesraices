import * as React from "react"

import useHome from "../hooks/useHome"

import {
  Container,
  Image,
  WelcomeText,
} from "../components/home/theme/index-theme"
import Layout from "../components/layout/Layout"
import SectionImg from "../components/home/SectionImg"
import PropertiesList from "../components/home/PropertiesList"

const IndexPage = () => {
  const home = useHome()
  const { name, content, image } = home

  return (
    <Layout>
      <main>
        <section>
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

          <Container>
            <h1>{name}</h1>
            <p>{content}</p>
          </Container>
        </section>

        <section>
          <SectionImg />
          <PropertiesList />
        </section>
      </main>
    </Layout>
  )
}

export default IndexPage
