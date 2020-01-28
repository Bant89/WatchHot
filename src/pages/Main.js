import React from 'react'
import GetMainContent from '../containers/GetMainContent'
import { SearchBar } from '../components/SearchBar'
const Main = () => {
  return (
    <div>
      <SearchBar />
      <h1>Main Page</h1>
     <GetMainContent />
    </div>
  )
}

export default Main
