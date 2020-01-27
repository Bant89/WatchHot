import React, { useRef, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { login } from '../actions'
import { useLocalStorage } from '../hooks/useLocalStorage'


const Login = () => {
  const [value, setValue] = useLocalStorage('user', '')
  const [error, setError] = useState("");
  const userRef = useRef(null);
  const passRef = useRef(null);
  let username, password;
  let dispatch = useDispatch();
  let history = useHistory();
 
  const handleClick = () => {
    username = userRef.current.value;
    password = passRef.current.value;

    if(!username.length)
      setError("Not given a username")
    else if(password.length < 5)
      setError("Password is too short")
    else {
      dispatch(login({name: username, password: password}))
      setValue({name: username, password: password})
      setError("");
      history.push("/")
    }
  }

  return (
    <div>
      <h1>Login Page</h1>
        <label>Username: </label>
        <input placeholder="Enter username" type="text" required ref={userRef}/>
        <br />
        <label>Password: </label>
        <input placeholder="Enter password" type="password" required  ref={passRef} />
        <br />
        <button onClick={() => handleClick()}>Log In</button>
        <p>{error}</p>
    </div>
  )
}

export default  Login
