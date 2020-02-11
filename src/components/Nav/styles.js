import styled, { css } from 'styled-components'

export const TopDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const NavBar = styled.ul`
  list-style: none;
  font-size: 1.3em;
  padding: 0;
  width: 200px;
  background-color: white;
  top: 0;
  margin: 0;
  left: 0;
  color: #333;
  z-index: 10;
  @media (max-width: 768px) {
    display: none;

    &.active {
      display: block;
      position: absolute;
      top: 60px;
    }
  }
`

export const NavItem = styled.li`
  margin: 0.3em 0;
  padding-left: 0.7em;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  ${props =>
    props.chosen &&
    css`
      color: red;
      font-weight: 800;
    `}
  &:hover {
    background-color: #ff5252;
    color: white;
    transform-origin: left;
  }
`
