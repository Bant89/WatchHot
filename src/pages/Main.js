import React from 'react'
import GetMainContent from '../containers/GetMainContent'
import { SearchBar } from '../components/SearchBar'
import { useSelector } from 'react-redux'

const Main = () => {
  let { name } = useSelector(state => state.genre)
  return (
    <div style={{textAlign: 'center'}}>
      <SearchBar />
      <h1>{name}</h1>
     <GetMainContent />
    </div>
  )
}

export default Main
