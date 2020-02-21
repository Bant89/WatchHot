import styled, { css } from 'styled-components'

export const Button = styled.button`
  font-size: 1.5em;
  background-color: transparent;
  color: #ff6b6b;
  border: 2px solid black;
  border-radius: 5px;
  margin: 0 5px;

  ${props => props.active && css`
    -webkit-box-shadow: 3px 5px 5px 0px rgba(0,0,0,0.54);
    -moz-box-shadow: 3px 5px 5px 0px rgba(0,0,0,0.54);
     box-shadow: 3px 5px 5px 0px rgba(0,0,0,0.54);
     color: #cc0000;
  `}

`