import styled from "styled-components"
import { BgImage } from "gbimage-bridge"

export const Image = styled(BgImage)`
  height: 600px;
`

export const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;

  h1 {
    font-weight: 900;
    margin-top: 30px;
    margin-bottom: 30px;
  }
`

export const WelcomeText = styled.div`
  color: #fff;
  height: 100%;
  max-width: 1200px;
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 2rem;
    font-weight: bold;
    margin: 0;
    max-width: 800px;
    text-shadow: 20px 20px 20px 20px #000;

    @media (min-width: 992px) {
      font-size: 4rem;
    }
  }
`
