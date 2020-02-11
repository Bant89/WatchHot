import React from 'react'
import { Link } from 'react-router-dom'
import { TagList } from '../TagList'
import { getStars } from '../../utils' 
import { Container, ItemData, Item, Image } from './styles'
import placeholder from '../../assets/placeholder.jpg'
import { genres } from '../../api/info'

export const MovieItem = ({movie}) => {
  let url = `/movie/${movie.id}`
  console.log(movie)
  let curGens = []
  movie.genre_ids.forEach(id => {
    genres.forEach(e => {
      if(id === e.id) {
        curGens.push(e)
        return;
      }    
    })
  })
  let imgUrl = !movie.poster_path ? placeholder : `https://image.tmdb.org/t/p/w300/${movie.poster_path}`
  let stars = getStars(movie.vote_average)
  return (
    <Container>
      <Item>
        <Link to={url} style={{textDecoration: 'none', color: '#333'}}>
          <Image alt="example" src={imgUrl} />
          <br />{movie.title}
        </Link>
      </Item>
      <ItemData>
        <h3>Rating:</h3><h3>{stars}</h3>
        <h3>Release date: </h3><h3>{(movie.release_date)}</h3>
        <TagList genres={curGens}/>
      </ItemData>
    </Container>
  )
}

// Vote average
// Release Date
// Runtime 
// tags

