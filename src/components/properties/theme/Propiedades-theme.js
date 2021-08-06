import styled from "styled-components"

export const Title = styled.h1`
  font-weight: 900;
`

export const Card = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 95%;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 2fr 1fr;
    column-gap: 5rem;
  }
`
