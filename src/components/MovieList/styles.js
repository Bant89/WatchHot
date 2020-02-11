import styled from 'styled-components'

export const List = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-template-rows: repeat(5, 1fr);
  justify-items: space-evenly;
  align-items: space-between;
  @media(max-width: 430px) {
    grid-template-columns: auto;
  }
`;