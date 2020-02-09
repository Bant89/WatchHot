import React from 'react'
import { MovieItem } from '../MovieItem'
import { List } from './styles'
export const MovieList = React.forwardRef((props, ref) => {
    let { loading = true, items = [] } = props
    let loadStyle = { display: loading ? "block" : "none" }
    debugger
    return (
      <>
        <List>
          {items && items.map(e => {
            return <MovieItem movie={e} key={e.id} />
          })}
        </List>
        <h2 ref={ref} style={loadStyle}>Loading...</h2>
      </>
    )
})


