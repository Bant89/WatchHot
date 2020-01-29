import { combineReducers } from 'redux'
import logInReducer from './logInReducer'
import genreReducer from './genreReducer'
import mainDataReducer from './mainDataReducer'
import movieDetailReducer from './movieDetailReducer'
import similarMoviesReducer from './similarMoviesReducer'

const mergedReducers = combineReducers({
  logUser: logInReducer,
  genre: genreReducer,
  mainData: mainDataReducer,
  movieDetail: movieDetailReducer,
  similarMovies: similarMoviesReducer
})

export default mergedReducers