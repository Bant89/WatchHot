import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { APIKEY, BASE_URL } from '../api/info'
import { get_detail_data, detail_data_error, detail_data_success,
  get_similar_data, similar_data_error, similar_data_success } from '../actions'
import { MovieInfo } from '../components/MovieInfo'

export const GetDetailContent = () => {
  let dispatch = useDispatch()
  let { id } = useParams()
  let SIMILAR_ENDPOINT = `/movie/${id}/similar`,DETAIL_ENDPOINT = `/movie/${id}`
  useEffect(() => {
    // Call for the details
    dispatch(get_detail_data())
    axios({
      method: 'get',
      url: `${BASE_URL + DETAIL_ENDPOINT}`,
      params: {
        api_key: APIKEY,
        language: 'en-US'
      }
    })
    .then(res => dispatch(detail_data_success(res.data)))
    .catch(err => {
      console.log(err)
      dispatch(detail_data_error())
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
      dispatch(similar_data_error())
    })

  }, [])

  return <MovieInfo />
}


