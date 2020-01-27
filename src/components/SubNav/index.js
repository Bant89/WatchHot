import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { change_genre } from '../../actions'

const SubNav = () => {
  const genre = useSelector(state => state.genre)
  const dispatch = useDispatch();
  return (
    <ul>
      <li onClick={() => {
        dispatch(change_genre({id: 5, name: 'Action'}))
      }}>Action</li>
      <li onClick={() => {
        dispatch(change_genre({id: 6, name: 'Adventure'}))
      }}>Adventure</li>
      <li onClick={() => {
        dispatch(change_genre({id: 8, name: 'Science Fiction'}))
      }}>Science Fiction</li>
      <li>Current genre: { genre.name } with and id: { genre.id } </li>
    </ul>
  )
}

export default SubNav;