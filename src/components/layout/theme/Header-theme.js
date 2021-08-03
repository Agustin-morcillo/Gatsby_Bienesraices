import styled from "styled-components"

export const AppHeader = styled.header`
  background-color: #0d283b;
  padding: 1rem;

  div {
    max-width: 120rem;
    margin: 0 auto;
    text-align: center;

    @media (min-width: 768px) {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
`
