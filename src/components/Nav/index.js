import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { change_genre, get_data } from '../../actions'
import { genres } from '../../api/info'

const Nav = () => {
  const genre = useSelector(state => state.genre)
  const dispatch = useDispatch();
  return (
    <ul>
      <li>Watch Hot</li>
      {genres.map(gen => {
        return <li key={gen.id} onClick={() => {
          dispatch(change_genre({id: gen.id, name: gen.name}))
          dispatch(get_data(gen))
        }}>{gen.name}</li>
      })}
    </ul>
  )
}

export default Nav;