import React, { useEffect, useState, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { get_data, data_error, data_success } from '../actions'
import { MovieList } from '../components/MovieList'
import { APIKEY, BASE_URL } from '../api/info'

const GetMainContent = () => {
  const currentGenre = useSelector(state => state.genre)
  let dispatch = useDispatch()
  let { isLoading, results } = useSelector(state => state.mainData)
  let [info, setInfo] = useState({ prevY: 0, page: 1})
  let contentRef = useRef(null)

   const loadMoreData = (baseUrl, endpoint, config) => {
    axios({
      method: 'get',
      url: `${baseUrl + endpoint}`,
      params: config
    })
    .then(res => {
      dispatch(data_success([...results, ...res.data.results.filter(e => e)]))
    })
    .catch(err => dispatch(data_error(err)))
   }


  useEffect(() => {
    // FIRST LOAD OF PAGE
    let ENDPOINT;
    let config = {}
    if(currentGenre.isGenre){
      ENDPOINT = '/discover/movie';
      config = {
        api_key: APIKEY,
        language: 'en-US',
        sort_by: 'popularity_desc',
        include_adult: false,
        include_video: false,
        page: info.page,
        with_genres: currentGenre.id
      }
    }else {
      ENDPOINT = `/movie/${currentGenre.name}`;
      config = {
        api_key: APIKEY,
        language: 'en-US',
        page: info.page
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
    
    // INFINITE SCROLL FUNCTIONALITY

    let options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.8
    }

    let handleObserver = (entities, observer) => {
      const y = entities[0].boundingClientRect.y;
      if(info.prevY > y) {
        console.log(`prevY: ${info.prevY} and Y: ${y}`)
        dispatch(get_data())
        setInfo({...info, page: info.page + 1})
        // loadMoreData(BASE_URL, ENDPOINT, config)
        setInfo({...info, prevY: y})
      }
    }

    let observer = new IntersectionObserver(handleObserver, options)
    console.log(contentRef.current)
    observer.observe(contentRef.current)

    return () => {
     loadMoreData(BASE_URL, ENDPOINT, config);
    }

  }, [currentGenre.id, currentGenre.isGenre, currentGenre.name, dispatch, info, loadMoreData])


    return <MovieList ref={contentRef} loading={isLoading} items={results} />

}

export default GetMainContent
