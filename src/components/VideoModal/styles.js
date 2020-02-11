import styled from 'styled-components'

export const Video = styled.iframe`
  width: 50vw;
  height: 65vh;
  margin: 5% auto;
`;

export const Container = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-items: center;
  align-items: center;
  background-color: rgba(33,33,33,.33);
  display: none;
  z-index: 100;
  &.active {
    display: block;
  }
`;