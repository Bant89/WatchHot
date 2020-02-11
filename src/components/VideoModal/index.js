import React from 'react'
import { Container, Video } from './styles'

export const VideoModal = ({ videoKey, active, setShow }) => {
  return (
    <Container className={active ? 'active' : ''} onClick={() => {
      setShow(false)
    }}>
      <Video allowFullScreen src={`https://www.youtube.com/embed/${videoKey}`} />
    </Container>
  )
}