import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { change_genre } from '../../actions'
import { TagUl, Tag } from './styles'

export const TagList = ({genres}) => {
  let dispatch = useDispatch()
  let history = useHistory()

  return (
      <TagUl>
      {genres.length > 0
        ? genres.map((e, idx) => <Tag key={e + idx} onClick={() => {
          dispatch(change_genre({id: e.id, name: e.name, isGenre: true}))
          history.push("/")
        }}>{e.name}</Tag>)
        : null}
    </TagUl>
  )
}