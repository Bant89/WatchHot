import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import useDebounce from '../../hooks/useDebounce'
import { APIKEY, BASE_URL } from '../../api/info'
import { get_data, data_error, data_success } from '../../actions'
const ENDPOINT = '/search/movie'


function searchData(search) {
  return axios({
    method: 'get',
    url: `${BASE_URL + ENDPOINT}`,
    params: {
      api_key: APIKEY,
      language: 'en-US',
      include_adult: false,
      page: 1,
      query: search
    }
  })
  .then(res => res.data.results)
  .catch(error => error)
}

export const SearchBar = () => {
  let dispatch = useDispatch()
  const [searchTerm, setSearchTerm] = useState('')

  const debouncedSearchTerm = useDebounce(searchTerm, 500)

  useEffect(() => {

    if(debouncedSearchTerm) {
      dispatch(get_data())
      searchData(debouncedSearchTerm)
        .then(results => {
          dispatch(data_success(results))
        })
        .catch(err => dispatch(data_error(err)))
    }
  }, [debouncedSearchTerm, dispatch])

  return (
    <div>
      <input type="text" placeholder="Enter movie..." onChange={e => setSearchTerm(e.target.value)}/>
    </div>
  )
}
