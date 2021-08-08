import styled from "styled-components"

export const AppFooter = styled.footer`
  background-color: #333;
  padding: 1rem;
  margin-top: 5rem;

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

export const Rights = styled.p`
  text-align: center;
  color: #fff;
  background-color: rgb(33, 44, 55);
  margin: 0;
  padding: 1rem;
`
