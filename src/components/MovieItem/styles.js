import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const ItemData = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 200px;
  justify-content: flex-start;
  align-items: center;
  & > * {
    margin-bottom: 5px;
    display: none;
  }
  ${Container}:hover & > * {
    display: inherit;
  }
`;

export const Item = styled.div`
  max-width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  font-size: 1.5em;
  margin-bottom: 0.5em;
`;

export const Image = styled.img`
  max-width: 200px;
  margin-bottom: 0.5em;
  border-radius: 5px;
`;
