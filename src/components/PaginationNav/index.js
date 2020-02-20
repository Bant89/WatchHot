import React from 'react'
import { Button } from './styles'

export const PaginationNav = ({ setPage, page }) => {
  let items = []
  if (page > 5) {

    for ( let i = page - 3; i < page; i++)
      items.push(i)

    for ( let i = page; i < page + 4; i++)
      items.push(i)

  } else {

    for ( let i = 1; i <= page; i++) {
      items.push(i)
    }
    for ( let i = page + 1; i < page + 4; i++) {
      items.push(i)
    }

  }

  let elements = items.map(e => {
    return e === page ? <Button onClick={() => setPage(e)} active>{e}</Button> : <Button onClick={() => setPage(e)}>{e}</Button>
  })

  return (
    <div>
      {elements}
    </div>
  )
}