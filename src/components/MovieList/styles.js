import styled from 'styled-components'

export const List = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(300px, 1fr));
  grid-template-rows: repeat(5, 1fr);
  justify-items: space-evenly;
  align-items: space-between;
`;