import React from 'react'
import { MovieItem } from '../MovieItem'
import { List } from './styles'
export const MovieList = ({ loading = true, items = new Array(20) }) => {
    return (
      <>
        <List>
          {items.map(e => {
            return <MovieItem movie={e} key={e.id} loading={loading}/>
          })}
        </List>
      </>
    )
}


