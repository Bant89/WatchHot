import React from 'react'
import { Link } from 'react-router-dom'
export const MovieItem = ({movie}) => {
  let url = `/movie/${movie.id}`
  return (
    <h2>
      <Link to={url} style={{textDecoration: 'none', color: '#333'}}>{movie.original_title}</Link>
    </h2>
  )
}