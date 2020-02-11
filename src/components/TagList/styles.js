import styled from 'styled-components'

export const Tag = styled.li`
  display: inline;
  background-color: #e65c5c;
  padding: 0.4em;
  border: 1px solid rgba(255, 255, 255, 0);
  border-radius: 5px;
  letter-spacing: 1px;
  font-weight: bolder;
  margin: 6px;
  height: 35px;
  width: auto;
`

export const TagUl = styled.ul`
  display: flex;
  justify-content: space-around;
  padding: 0;
  align-items: center;
  grid-area: tag;
  flex-wrap: wrap;
`