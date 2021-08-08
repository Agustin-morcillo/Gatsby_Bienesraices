import * as React from "react"
import { getImage } from "gatsby-plugin-image"

import homePageQuery from "../queries/home/homePageQuery"

import {
  Container,
  Image,
  WelcomeText,
} from "../components/home/theme/index-theme"
import Layout from "../components/layout/Layout"
import SectionImg from "../components/home/SectionImg"
import PropertiesList from "../components/home/PropertiesList"

const IndexPage = () => {
  const home = homePageQuery()
  const { name, content, image } = home
  const imagePath = getImage(image.localFile)

  return (
    <Layout>
      <main>
        <section>
          <Image alt="mansión" image={imagePath}>
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
