import styled from 'styled-components'
import { fadeIn } from '../../styles/animation'

export const Container = styled.div`
  ${fadeIn()}
  padding: 1em;
  display: grid;
  margin: 0 auto;
  grid-template-areas:
    'title title  video'
    'image data   data'
    'text  text   text';
  width: 70vw;
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
    padding: 0;
  }
`

export const Title = styled.h2`
  text-align: left;
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
    'trailer trailer'
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
  background-color: #e65c5c;
  font-weight: 700;
  height: 4em;
  margin: 0 auto;
  width: 200px;
  border-radius: 5px;
  grid-area: trailer;
`;