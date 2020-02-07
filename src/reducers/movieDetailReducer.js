import { DETAIL_DATA_REQUEST, DETAIL_DATA_ERROR, DETAIL_DATA_SUCCESS } from '../actions'

const movieDetailReducer = 
(
  state = {
    error: '',
    isLoading: false,
    videos: [],
    result: {}
  },
  action
) => {
  switch(action.type) {
    case DETAIL_DATA_REQUEST: 
      return {
        ...state,
        error: '',
        isLoading: true
      }
    case DETAIL_DATA_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.error
      }
    case DETAIL_DATA_SUCCESS:
      return {
        ...state,
        error: '',
        isLoading: false,
        result: action.payload.result,
        videos: action.payload.videos
      }
    default:
      return state
  }
}

export default movieDetailReducer