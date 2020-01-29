import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { APIKEY, BASE_URL } from '../api/info'
import { get_detail_data, detail_data_error, detail_data_success } from '../actions'
let { id } = useParams()
let dispatch = useDispatch()

export const GetDetailContent = () => {
  useEffect(() => {
    detailsData()
  }, [id])

  return (
    <h1>Details</h1>
  )

}

const detailsData = () => {
  let DETAIL_ENDPOINT = `/movie/${id}`
  dispatch(get_detail_data)
  axios({
    method: 'get',
    url: `${BASE_URL + DETAIL_ENDPOINT}`,
    params: {
      api_key: APIKEY,
      language: 'en-US'
    }
  })
  .then(res => console.log(res))
  .catch(err => dispatch(detail_data_error))
}

const similarData = () => {
  let SIMILAR_ENDPOINT = `/movie/${id}/similar`
}