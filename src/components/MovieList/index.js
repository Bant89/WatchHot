import React from 'react'
import { MovieItem } from '../MovieItem'
import { List } from './styles'
export const MovieList = ({ loading = true, items = [] }) => {
  
  if(loading) {
    return <h2>Loading...</h2>
  }else {
    return (
      <List>
        {items.map(e => {
          return <MovieItem movie={e} key={e.id} />
        })}
      </List>
    )
  }
}


