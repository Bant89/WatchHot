import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  @media(max-width: 768px) {
    margin-bottom: 20px;
    width: 100%;
  }
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
  @media (max-width: 768px) {
    display: none;
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
