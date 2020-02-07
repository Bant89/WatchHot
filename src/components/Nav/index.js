import React from 'react'
import { useDispatch } from 'react-redux'
import { SearchBar } from '../SearchBar'
import { change_genre, get_data } from '../../actions'
import { genres } from '../../api/info'
import { NavBar, NavItem, TopDiv } from './styles'

const Nav = () => {
  const dispatch = useDispatch();
  let gens = genres.map(gen => {
    return <NavItem key={gen.id} onClick={() => {
      dispatch(change_genre({id: gen.id, name: gen.name, isGenre: true}))
      dispatch(get_data())
    }}>{gen.name}</NavItem>
  })
  return (
    <NavBar>
      <NavItem>
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
    }}>
        Popular
      </NavItem>
      <NavItem onClick={() => {
      dispatch(change_genre({id: 123, name: 'top_rated', isGenre: false}))
      dispatch(get_data())
    }}>
        Top Rated
      </NavItem>
      <NavItem onClick={() => {
      dispatch(change_genre({id: 123, name: 'upcoming', isGenre: false}))
      dispatch(get_data())
    }}>
        Upcoming
      </NavItem>
      {gens}
    </NavBar>
  )
}

export default Nav;