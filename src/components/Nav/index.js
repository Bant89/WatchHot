import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { SearchBar } from '../SearchBar'
import { change_genre, get_data } from '../../actions'
import { genres } from '../../api/info'
import { NavBar, NavItem, TopDiv } from './styles'

const Nav = () => {
  const dispatch = useDispatch()
  let history = useHistory()
  const goHome = () => history.push("/")
  let gens = genres.map(gen => {
    return <NavItem key={gen.id} onClick={() => {
      dispatch(change_genre({id: gen.id, name: gen.name, isGenre: true}))
      dispatch(get_data())
      goHome()
    }}>{gen.name}</NavItem>
  })
  return (
    <NavBar>
      <NavItem onClick={() => {
        dispatch(change_genre({id: 123, name: 'popular', isGenre: false}))
        dispatch(get_data())
        goHome()
      }}>
        <TopDiv>
          Watch Hot 
        </TopDiv>
      </NavItem>
      <NavItem>
        <SearchBar />
      </NavItem>
      <NavItem onClick={() => {
      dispatch(change_genre({id: 123, name: 'popular', isGenre: false}))
      dispatch(get_data())
      goHome()
    }}>
        Popular
      </NavItem>
      <NavItem onClick={() => {
      dispatch(change_genre({id: 123, name: 'top_rated', isGenre: false}))
      dispatch(get_data())
      goHome()
    }}>
        Top Rated
      </NavItem>
      <NavItem onClick={() => {
      dispatch(change_genre({id: 123, name: 'upcoming', isGenre: false}))
      dispatch(get_data())
      goHome()
    }}>
        Upcoming
      </NavItem>
      {gens}
    </NavBar>
  )
}

export default Nav;