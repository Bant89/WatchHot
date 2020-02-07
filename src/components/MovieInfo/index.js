import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

export const MovieInfo = props => {
  let {
    budget,
    title,
    overview,
    popularity,
    poster_path,
    release_date,
    revenue,
    runtime,
    vote_average,
    vote_count
  } = props.data
  let { isLoading, error } = props

  if (isLoading) {
    return <h1>Loading...</h1>
  } else if (error) {
    return <h1>Oops! Something went wrong!</h1>
  }
  return <h1>Movie Information</h1>
}
