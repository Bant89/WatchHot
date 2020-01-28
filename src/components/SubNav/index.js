import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { change_genre, get_data } from '../../actions'

const SubNav = () => {
  const genre = useSelector(state => state.genre)
  const dispatch = useDispatch();
  return (
    <ul>
      <li onClick={() => {
        dispatch(change_genre({id: 28, name: 'Action'}))
        dispatch(get_data(genre))
      }}>Action</li>
      <li onClick={() => {
        dispatch(change_genre({id: 12, name: 'Adventure'}))
        dispatch(get_data(genre))
      }}>Adventure</li>
      <li onClick={() => {
        dispatch(change_genre({id: 878, name: 'Science Fiction'}))
        dispatch(get_data(genre))
      }}>Science Fiction</li>
      <li>Current genre: { genre.name } with and id: { genre.id } </li>
    </ul>
  )
}

export default SubNav;