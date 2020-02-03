import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'antd'

export const MovieItem = ({movie}) => {
  let url = `/movie/${movie.id}`
  // console.log(movie)
  return (
    <Card
      hoverable
      style={{ width: 300 }}
      cover={<img alt="example" src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} />}>
      <Link to={url} style={{textDecoration: 'none', color: '#333'}}>{movie.original_title}</Link>
    </Card>
  )
}