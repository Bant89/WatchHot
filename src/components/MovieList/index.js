import React from 'react'
import { MovieItem } from '../MovieItem'

export const MovieList = ({ loading = true, items = [] }) => {
  
  if(loading) {
    return <h2>Loading</h2>
  }else {
    return (
      <div>
        {items.map(e => {
          return <MovieItem movie={e}  key={e.id}/>
        })}
      </div>
    )
  }
}


