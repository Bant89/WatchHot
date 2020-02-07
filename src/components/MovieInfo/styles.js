import styled from 'styled-components'

export const MainContainer = styled.div`
  width: 80vw;
  margin: 0 auto;
  background-color: #fcbe03;
  @media (max-width: 768px) {
    padding: 0.5em;
  }
`

export const Container = styled.div`
  padding: 1em;
  display: grid;
  grid-template-areas:
    'title title  title'
    'image data   data'
    'text  text   text';
  width: 50vw;
  height: auto;
  grid-gap: 10px;
  margin: 0 auto;

  @media (max-width: 860px) {
    grid-template-areas:
      'title'
      'image'
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
export const Tag = styled.li`
  display: inline;
  background-color: lightblue;
  padding: 0.4em;
  border: 1px solid rgba(255, 255, 255, 0);
  border-radius: 5px;
  letter-spacing: 1px;
  font-weight: bolder;
  margin: 6px;
  height: 35px;
`

export const TextPlacement = styled.div`
  grid-area: text;
`

export const ulStyle = {
  display: 'flex',
  justifyContent: 'space-around',
  padding: '0',
  gridArea: 'tag'
}

export const DataContainer = styled.div`
  grid-area: data;
  display: grid;
  align-items: stretch;
  grid-template-areas:
    'left right'
    'tag  tag';
`

export const ItemHeader = styled.p`
  font-weight: bolder;
  margin: 20px 0;
`

export const ItemValue = styled.p`
  color: red;
  font-weight: 700;
`
