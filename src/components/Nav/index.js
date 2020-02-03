import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { change_genre, get_data } from '../../actions'
import { genres } from '../../api/info'
import { NavBar, NavItem, TopDiv } from './styles'

const Nav = () => {
  const genre = useSelector(state => state.genre)
  const dispatch = useDispatch();
  return (
    <NavBar>
      <NavItem>
        <TopDiv>
          Watch Hot 
          <ion-icon name="close"></ion-icon>
        </TopDiv>
      </NavItem>
      {genres.map(gen => {
        return <NavItem key={gen.id} onClick={() => {
          dispatch(change_genre({id: gen.id, name: gen.name}))
          dispatch(get_data(gen))
        }}>{gen.name}</NavItem>
      })}
    </NavBar>
  )
}

export default Nav;