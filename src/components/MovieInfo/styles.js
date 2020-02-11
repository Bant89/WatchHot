import styled from 'styled-components'

export const MainContainer = styled.div`
  width: 80vw;
  background-color: #fcbe03;
  @media (max-width: 768px) {
    padding: 0.5em;
  }
`

export const Container = styled.div`
  padding: 1em;
  display: grid;
  margin: 0 auto;
  grid-template-areas:
    'title title  video'
    'image data   data'
    'text  text   text';
  width: 50vw;
  height: auto;
  grid-gap: 10px;

  @media (max-width: 860px) {
    grid-template-areas:
      'title'
      'image'
      'video'
      'data'
      'text';
  }
  @media (max-width: 490px) {
    margin: 0;
    padding: 0;
  }
`

export const Title = styled.h2`
  text-align: center;
  font-size: 1.6em;
  grid-area: title;
`
export const Image = styled.img`
  max-width: 100%;
  min-width: 300px;
  height: auto;
  grid-area: image;
`
export const TextPlacement = styled.div`
  grid-area: text;
`

export const DataContainer = styled.div`
  grid-area: data;
  display: grid;
  grid-template-areas:
    'left right'
    'tag tag';
`

export const ItemHeader = styled.p`
  font-weight: bolder;
  margin: 20px 0;
`

export const ItemValue = styled.p`
  color: red;
  font-weight: 700;
`

export const Button = styled.button`
  grid-area: video;
  background-color: lightblue;
  font-weight: 700;
  height: auto;
  border-radius: 5px;
`;