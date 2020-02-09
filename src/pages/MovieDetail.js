import React, { useState } from 'react'
import { VideoModal } from '../components/VideoModal'
import { GetDetailContent } from '../containers/GetDetailContent'

const MovieDetail = () => {
  const [showVideo, setShowVideo] = useState(false);
  return (
    <div style={{textAlign: 'center', width: '100%'}}>
      <VideoModal active={showVideo} setShow={setShowVideo} />
      <h1>Movie Detail</h1> 
      <GetDetailContent setShow={setShowVideo} />
    </div>
  )
}

export default MovieDetail