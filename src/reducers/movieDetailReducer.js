import { DETAIL_DATA_REQUEST, DETAIL_DATA_ERROR, DETAIL_DATA_SUCCESS } from '../actions'

const movieDetailReducer = 
(
  state = {
    error: '',
    isLoading: false,
    result: {}
  },
  action
) => {
  switch(action.type) {
    case DETAIL_DATA_REQUEST: 
      return {
        ...state,
        isLoading: true
      }
    case DETAIL_DATA_ERROR:
      return {
        ...state,
        error: action.error
      }
    case DETAIL_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        result: action.payload.result
      }
    default:
      return state
  }
}

export default movieDetailReducer