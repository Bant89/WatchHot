import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {  failed_login } from '../../actions'
import { useHistory } from 'react-router-dom'
import SubNav from '../SubNav'

const Nav = () => {
  const history = useHistory();
  const [IsOpen, ToggleSubMenu] = useState(false)
  const [media, setMedia] = useState('Movies')
  const user = useSelector(state => state.logUser)
  const dispatch = useDispatch()
  return (
    <ul>
      <li onClick={() => {
        if(user.isLogged) 
          dispatch(failed_login())
        else 
          history.push("/login")
      }}>{ user.isLogged ? 'Sign Out' : 'Sign In' }</li>
      <li>{media} <button onClick={() => setMedia(media === 'Movies' ? 'TV Shows' : 'Movies')}>Toggle</button></li>
      <li>Lists</li>
      <li onClick={() => ToggleSubMenu(!IsOpen)}>Genres</li>
      {IsOpen ? <SubNav /> : ''}
    </ul>
  )
}

export default Nav;