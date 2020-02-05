import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { SearchBar } from '../SearchBar'
import { change_genre, get_data } from '../../actions'
import { genres } from '../../api/info'
import { NavBar, NavItem, TopDiv } from './styles'

const Nav = () => {
  const genre = useSelector(state => state.genre)
  const dispatch = useDispatch();
  let gens = genres.map(gen => {
    return <NavItem key={gen.id} onClick={() => {
      dispatch(change_genre({id: gen.id, name: gen.name}))
      dispatch(get_data(gen))
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
      {gens}
    </NavBar>
  )
}

export default Nav;