import { CHANGE_GENRE, GET_GENRE } from '../actions'

const genreReducer = (state = {  id: 3, name: 'Action' }, action) => {
  switch(action.type) {
    case CHANGE_GENRE:
      return {
        id: action.payload.id,
        name: action.payload.name
      }
    case GET_GENRE:
    default:
      return state;
  }
}

export default genreReducer;