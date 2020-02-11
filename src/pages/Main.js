import React from 'react'
import GetMainContent from '../containers/GetMainContent'
import { useSelector } from 'react-redux'

const Main = () => {
  let { name } = useSelector(state => state.genre)
  name = name[0].toUpperCase() + name.slice(1)
  if(name === "Top_rated") name = "Top Rated"
  return (
    <div style={{textAlign: 'center', width: '100%'}}>
      <h1 style={{marginBottom: '15px'}}>{name}</h1>
     <GetMainContent />
    </div>
  )
}

export default Main
