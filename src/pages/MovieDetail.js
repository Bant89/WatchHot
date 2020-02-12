import React from 'react'
import { GetDetailContent } from '../containers/GetDetailContent'

const MovieDetail = () => {
  return (
    <div style={{textAlign: 'left', width: 'auto', margin: '0 auto'}}>
      <h1>Movie Detail</h1> 
      <GetDetailContent />
    </div>
  )
}

export default MovieDetail