import styled from "styled-components"
import { Link } from "gatsby"

export const AppFooter = styled.footer`
  background-color: #333;
  padding: 1rem;
  margin-top: 4rem;

  div {
    max-width: 1200px;
    margin: 0 auto;

    @media (min-width: 768px) {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
`

export const GoToHome = styled(Link)`
  color: #fff;
  text-align: center;
  text-decoration: none;
`

export const Rights = styled.p`
  text-align: center;
  color: #fff;
  background-color: rgb(33, 44, 55);
  margin: 0;
  padding: 1rem;
`
