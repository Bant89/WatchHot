import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { APIKEY, BASE_URL } from '../api/info'
import {
  get_detail_data,
  detail_data_error,
  detail_data_success,
  get_similar_data,
  similar_data_error,
  similar_data_success
} from '../actions'
import { MovieInfo } from '../components/MovieInfo'
import { SimilarMovies } from '../components/SimilarMovies'
import { VideoModal } from '../components/VideoModal'

export const GetDetailContent = ({ setShow }) => {
  let dispatch = useDispatch()
  let movieData = useSelector(state => state.movieDetail.result)
  let similarData = useSelector(state => state.similarMovies.results)
  let { isLoading, error } = useSelector(state => state.movieDetail)
  let { videos } = useSelector(state => state.movieDetail)
  const [showVideo, setShowVideo] = useState(false);
  let [videoKey, setVideoKey] = useState('');
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
        }),
        axios({
          method: 'get',
          url: `${BASE_URL + VIDEO_ENDPOINT}`,
          params: {
            api_key: APIKEY,
            language: 'en-US'
          }
        })
      ])
      .then(
        axios.spread((details, videos) => {
          dispatch(detail_data_success(details.data, videos.data.results))
          setVideoKey(videos.data.results[0].key);
        })
      )
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

  return (
    <>
      <VideoModal active={showVideo} setShow={setShowVideo} videoKey={videoKey}/>
      <MovieInfo
        data={movieData}
        loading={isLoading}
        error={error}
        videos={videos}
        setShow={setShowVideo}
      />
      <SimilarMovies data={similarData} />
    </>
  )
}
