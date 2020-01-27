import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { login, logout } from '../../actions'
import { useHistory } from 'react-router-dom'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import SubNav from '../SubNav'

const Nav = () => {
  const history = useHistory();
  const [IsOpen, ToggleSubMenu] = useState(false)
  const [media, setMedia] = useState('Movies')
  let [user = {name: '', password: ''}, setUser] = useLocalStorage('user')
  const userState = useSelector(state => state.logUser)
  const dispatch = useDispatch()

  useEffect(() => {
    if(user.name && user.name.length)
      dispatch(login({name: user.name, password: user.password}))
  }, [])
  return (
    <ul>
      <li onClick={() => {
        if(userState.isLogged) {
          dispatch(logout())
          setUser(null)
        } else {
          history.push("/login")
        }
      }}>{ userState.isLogged ? 'Sign Out' : 'Sign In' }</li>
      <li>{media} <button onClick={() => setMedia(media === 'Movies' ? 'TV Shows' : 'Movies')}>Toggle</button></li>
      <li>Lists</li>
      <li onClick={() => ToggleSubMenu(!IsOpen)}>Genres</li>
      {IsOpen ? <SubNav /> : ''}
    </ul>
  )
}

export default Nav;