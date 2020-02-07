import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { APIKEY, BASE_URL } from '../api/info'
import { get_detail_data, detail_data_error, detail_data_success,
  get_similar_data, similar_data_error, similar_data_success } from '../actions'
import { MovieInfo } from '../components/MovieInfo'

export const GetDetailContent = () => {
  let dispatch = useDispatch()
  let data = useSelector(state => state.movieDetail.result)
  let { isLoading, error } = useSelector(state => state.movieDetail)
  let { videos } = useSelector(state => state.movieDetail)
  let { id } = useParams()
  let SIMILAR_ENDPOINT = `/movie/${id}/similar`,
      DETAIL_ENDPOINT = `/movie/${id}`,
      VIDEO_ENDPOINT = `/movie/${id}/videos`
  useEffect(() => {
    // Call for the details
    dispatch(get_detail_data())
    axios
    .all([
      axios({
      method: 'get',
      url: `${BASE_URL + DETAIL_ENDPOINT}`,
      params: {
        api_key: APIKEY,
        language: 'en-US'
      } // Call for the video
    }),axios({
      method: 'get',
      url: `${BASE_URL + VIDEO_ENDPOINT}`,
      params: {
        api_key: APIKEY,
        language: 'en-US'
      }
    })
  ])
    .then(axios.spread((details, videos) => {
      dispatch(detail_data_success(details.data, videos.data.results))
      console.log(details.data)
      console.log(videos.data.results)
    }))
    .catch(err => {
      console.log(err)
      dispatch(detail_data_error(err))
    })


    // Call for similar movies
    dispatch(get_similar_data())
    axios({
      method: 'get',
      url: `${BASE_URL + SIMILAR_ENDPOINT}`,
      params: {
        api_key: APIKEY,
        language: 'en-US'
      }
    })
    .then(res => dispatch(similar_data_success(res.data.results)))
    .catch(err => {
      console.log(err)
      dispatch(similar_data_error(err))
    })

  }, [VIDEO_ENDPOINT, DETAIL_ENDPOINT, SIMILAR_ENDPOINT, dispatch])

  return <MovieInfo data={data} loading={isLoading} error={error} videos={videos}/>
}


