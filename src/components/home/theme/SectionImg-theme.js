import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"

export const Image = styled(BackgroundImage)`
  height: 300px;
`

export const Text = styled.div`
  color: #fff;
  height: 100%;
  max-width: 1200px;
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h3 {
    font-size: 2rem;
    margin: 0;
    max-width: 800px;

    @media (min-width: 992px) {
      font-size: 4rem;
    }
  }
`
