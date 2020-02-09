import styled from 'styled-components'

export const List = styled.div`
  min-height: 2100px;
  display: grid;
  width: 100%;
  grid-template-columns: repeat(3, minmax(400px, 1fr));
  grid-template-rows: repeat(5, 1fr);
  justify-items: space-evenly;
  align-items: space-between;
`;