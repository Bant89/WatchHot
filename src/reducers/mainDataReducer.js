import { FETCH_DATA_SUCCESS, FETCH_DATA_ERROR, FETCH_DATA_REQUEST } from '../actions'

const mainDataReducer = 
(
  state = {
    error: '',
    isLoading: false,
    results: []
  },
  action
) => {
  switch(action.type) {
    case FETCH_DATA_REQUEST: 
      return {
        ...state,
        isLoading: true
      }
    case FETCH_DATA_ERROR:
      return {
        ...state,
        error: action.error
      }
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        results: action.payload.results
      }
    default:
      return state
  }
}

export default mainDataReducer