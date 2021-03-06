import styled from "styled-components"
import { Link } from "gatsby"

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  padding-bottom: 3rem;

  @media (min-width: 768px) {
    padding: 0;
    flex-direction: row;
  }
`

export const NavLink = styled(Link)`
  color: #fff;
  font-weight: 700;
  font-family: "PT Sans", sans-serif;
  text-decoration: none;
  padding: 0.5rem;
  margin-right: 1rem;
  &:last-of-type {
    margin-right: 0;
  }
  &.current-page {
    border-bottom: 2px solid #fff;
  }
`
