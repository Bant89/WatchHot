import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { get_data, data_error, data_success } from '../actions'
import { MovieList } from '../components/MovieList'

const APIKey = 'f3a068bc2304691671665a006a0c51aa', BASE_URL = 'https://api.themoviedb.org/3', ENDPOINT = '/discover/movie'

const GetMainContent = () => {
  const currentGenre = useSelector(state => state.genre)
  let dispatch = useDispatch()
  let { isLoading, results } = useSelector(state => state.mainData)

  useEffect(() => {
    dispatch(get_data(currentGenre))
    console.log('entro aqui')
      axios({
        method: 'get',
        url: `${BASE_URL + ENDPOINT}`,
        params: {
          api_key: APIKey,
          language: 'en-US',
          sort_by: 'popularity_desc',
          include_adult: false,
          include_video: false,
          page: 1,
          with_genres: currentGenre.id
        }
      })
      .then(res => {
        console.log ('DESDE MAIN CONTENT GENRE ES', currentGenre)
        dispatch(data_success(res.data.results.filter(e => e)))
      })
      .catch(err => dispatch(data_error(err)))
    
  }, [currentGenre])

  if(isLoading)
    return <h1>Loading</h1>
  else{
    return <MovieList loading={isLoading} items={results} />
  }

}

export default GetMainContent
