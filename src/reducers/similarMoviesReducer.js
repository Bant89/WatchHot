import { SIMILAR_DATA_REQUEST, SIMILAR_DATA_ERROR, SIMILAR_DATA_SUCCESS } from '../actions'

const similarMoviesReducer = 
(
  state = {
    error: '',
    isLoading: false,
    results: []
  },
  action
) => {
  switch(action.type) {
    case SIMILAR_DATA_REQUEST: 
      return {
        ...state,
        error: '',
        isLoading: true
      }
    case SIMILAR_DATA_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.error
      }
    case SIMILAR_DATA_SUCCESS:
      return {
        ...state,
        error: '',
        isLoading: false,
        results: action.payload.results
      }
    default:
      return state
  }
}

export default similarMoviesReducer