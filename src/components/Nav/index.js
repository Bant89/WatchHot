import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { login, logout } from '../../actions'
import { useHistory } from 'react-router-dom'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import SubNav from '../SubNav'
import { APIKEY, BASE_URL } from '../../api/info'

const Nav = () => {
  const history = useHistory();
  const [IsOpen, ToggleSubMenu] = useState(false)
  const [media, setMedia] = useState('Movies')
  let [token, setToken] = useLocalStorage('token', '')
  let [session, setSession] = useLocalStorage('session', '')

  const userState = useSelector(state => state.logUser)
  const dispatch = useDispatch()
  const TOKEN_ENDPOINT = '/authentication/token/new', 
  SESSION_ENDPOINT = '/authentication/session/new'
  // redirect url https://watch-hot.now.sh/

  useEffect(() => {
    if(token) {
      axios.post(`${BASE_URL + SESSION_ENDPOINT + '?api_key=' + APIKEY}`,{
          "request_token": token
        })
      .then(res => console.log(res))
      .catch(err => console.error(err))
      }
    }, [token])

  return (
    <ul>
      <li onClick={() => {
        axios({
          method: 'get',
          url: `${BASE_URL + TOKEN_ENDPOINT}`,
          params: {
            api_key: APIKEY
          }
        })
        .then(res => {
          // Try to create a request token
          console.log(res)
          if(!res.data.success)
            throw new Error('Error getting request_token')
          else
          setToken(res.data.request_token)
          
          return token
        })
        .then(req_token => {
          // Ask the user for permision
          console.log(req_token)
          debugger
          window.location = `https://www.themoviedb.org/authenticate/${req_token}`
        })
        .catch(err => {
          console.log(err)
        })
      }}>{ userState.isLogged ? 'Sign Out' : 'Sign In' }</li>
      <li>{media} <button onClick={() => setMedia(media === 'Movies' ? 'TV Shows' : 'Movies')}>Toggle</button></li>
      <li>Lists</li>
      <li onClick={() => ToggleSubMenu(!IsOpen)}>Genres</li>
      {IsOpen ? <SubNav /> : ''}
    </ul>
  )
}

export default Nav;