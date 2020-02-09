import React from 'react'
import { Container, Video } from './styles'

export const VideoModal = (props) => {
  return (
    <Container className={props.active ? 'active' : ''} onClick={() => {
      props.setShow(false)
    }}>
      <Video src="https://www.youtube.com/embed/tgbNymZ7vqY" allowFullScreen>
      </Video>
    </Container>
  )
}