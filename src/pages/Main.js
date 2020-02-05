import React from 'react'
import GetMainContent from '../containers/GetMainContent'
import { useSelector } from 'react-redux'

const Main = () => {
  let { name } = useSelector(state => state.genre)
  return (
    <div style={{textAlign: 'center'}}>
      <h1>{name}</h1>
     <GetMainContent />
    </div>
  )
}

export default Main
