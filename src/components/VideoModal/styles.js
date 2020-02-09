import styled from 'styled-components'

export const Video = styled.iframe`
  width: 50vw;
  height: 65vh;
  margin: 5% auto;
`;

export const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-items: center;
  align-items: center;
  background-color: rgba(33,33,33,.33);
  display: none;

  &.active {
    display: block;
  }
`;