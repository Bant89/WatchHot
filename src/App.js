import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Nav from './components/Nav'
import Main from './pages/Main.js'
import MovieDetail from './pages/MovieDetail.js'
import UserProfile from './pages/UserProfile.js'
import './App.css'
import { GlobalStyles } from './styles/GlobalStyles.js'
import { IoIosMenu, IoIosClose } from 'react-icons/io'

function App() {
  const [isOpen, setOpen] = useState(false);
  const iconStyle = {
    cursor: 'pointer'
  }
  return (
    <Router>
      <GlobalStyles />
      <h1 className="mainTitle">
        {isOpen ? <IoIosClose style={iconStyle} onClick={() => setOpen(!isOpen)}/> : <IoIosMenu style={iconStyle}   onClick={() => setOpen(!isOpen)}/>} 
        <Link to="/" style={{textDecoration: 'none', color: 'red', marginLeft: '10px'}}>WatchHot</Link>
      </h1>
      <div className="mainContainer">
        <Nav isOpen={isOpen} />
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/genre/:id" component={Main} />
          <Route path="/user/:id" component={UserProfile} />
          <Route path="/movie/:id" component={MovieDetail} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
