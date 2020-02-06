import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { get_data, data_error, data_success } from '../actions'
import { MovieList } from '../components/MovieList'
import { APIKEY, BASE_URL } from '../api/info'

const GetMainContent = () => {
  const currentGenre = useSelector(state => state.genre)
  let dispatch = useDispatch()
  let { isLoading, results } = useSelector(state => state.mainData)

  useEffect(() => {
    let ENDPOINT;
    let config = {};
    if(currentGenre.isGenre){
      ENDPOINT = '/discover/movie';
      config = {
        api_key: APIKEY,
        language: 'en-US',
        sort_by: 'popularity_desc',
        include_adult: false,
        include_video: false,
        page: 1,
        with_genres: currentGenre.id
      }
    }else {
      ENDPOINT = `/movie/${currentGenre.name}`;
      config = {
        api_key: APIKEY,
        language: 'en-US',
        page: 1
      }
    }
    dispatch(get_data())
      axios({
        method: 'get',
        url: `${BASE_URL + ENDPOINT}`,
        params: config
      })
      .then(res => {
        dispatch(data_success(res.data.results.filter(e => e)))
      })
      .catch(err => dispatch(data_error(err)))
    
  }, [currentGenre, dispatch])

  if(isLoading)
    return <h1>Loading</h1>
  else{
    return <MovieList loading={isLoading} items={results} />
  }

}

export default GetMainContent
