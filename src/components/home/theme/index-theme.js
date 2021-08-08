import styled from "styled-components"
import { BgImage } from "gbimage-bridge"

export const Image = styled(BgImage)`
  height: 680px;

  @media (max-width: 768px) {
    height: 400px;
  }

  @media (max-width: 480px) {
    height: 250px;
  }
`

export const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;

  h1 {
    font-weight: 900;
    margin-top: 30px;
    margin-bottom: 30px;
  }

  p {
    @media (max-width: 768px) {
      padding: 0 3rem;
    }
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
    text-shadow: 30px 30px 30px 30px #000;

    @media (min-width: 992px) {
      font-size: 4rem;
    }
  }
`
