import styled, { css } from 'styled-components'

export const Button = styled.button`
  font-size: 1.5em;
  background-color: transparent;
  color: lightblue;
  border: 2px solid black;
  margin: 0 5px;

  ${props => props.active && css`
    -webkit-box-shadow: 3px 10px 5px 0px rgba(0,0,0,0.54);
    -moz-box-shadow: 3px 10px 5px 0px rgba(0,0,0,0.54);
     box-shadow: 3px 10px 5px 0px rgba(0,0,0,0.54);
     color: blue;
  `}

`