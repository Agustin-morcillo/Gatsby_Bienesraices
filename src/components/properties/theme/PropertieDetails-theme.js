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

export const Sidebar = styled.div`
  span {
    font-size: 3rem;
  }
  .price {
    font-size: 3rem;
    color: #75ab00;
  }

  div {
    margin-top: 4rem;
    border-radius: 2rem;
    background-color: #75ab00;
    padding: 3rem;
    color: #fff;

    p {
      margin: 0;
    }
  }
`
