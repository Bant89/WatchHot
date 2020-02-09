import { CHANGE_GENRE, GET_GENRE } from '../actions'

const genreReducer = (state = {  id: 123, name: 'popular', isGenre: false }, action) => {
  switch(action.type) {
    case CHANGE_GENRE:
      return {
        id: action.payload.id,
        name: action.payload.name,
        isGenre: action.payload.isGenre
      }
    case GET_GENRE:
    default:
      return state;
  }
}

export default genreReducer;