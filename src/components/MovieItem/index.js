import React from 'react'
import { Link } from 'react-router-dom'
import { Item, Image } from './styles'
import placeholder from '../../assets/placeholder.jpg'

export const MovieItem = ({movie}) => {
  let url = `/movie/${movie.id}`
  // console.log(movie)
  let imgUrl = !movie.poster_path ? placeholder : `https://image.tmdb.org/t/p/w200/${movie.poster_path}`

  return (
    <Item>
      <Image alt="example" src={imgUrl} />
      <Link to={url} style={{textDecoration: 'none', color: '#333'}}>{movie.original_title}</Link>
    </Item>
  )
}