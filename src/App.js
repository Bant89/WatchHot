import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useLocalStorage } from './hooks/useLocalStorage'
import Nav from './components/Nav';
import Main from './pages/Main.js'
import Login from './pages/Login.js'
import MovieDetail from './pages/MovieDetail.js'
import UserProfile from './pages/UserProfile.js'
import './App.css'


function App() {
  
  useEffect(() => {

  })

  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/" exact component={Main}/>
        <Route path="/genre/:id" component={Main}/>
        <Route path="/user/:id" component={UserProfile}/>
        <Route path="/login" component={Login}/>
        <Route path="/movie/:id" component={MovieDetail}/>
      </Switch>
    </Router>
  );
}

export default App;
