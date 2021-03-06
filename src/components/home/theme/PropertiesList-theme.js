import styled from "styled-components"

export const Title = styled.h2`
  margin-top: 4rem;
  font-weight: 800;
  font-size: 2.7rem;
`

export const List = styled.ul`
  max-width: 1200px;
  width: 95%;
  margin: 4rem auto 0 auto;

  @media (min-width: 480px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    row-gap: 2rem;
    column-gap: 2rem;
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`
