import { combineReducers } from 'redux'
import logInReducer from './logInReducer'
import genreReducer from './genreReducer'

const mergedReducers = combineReducers({
  logUser: logInReducer,
  genre: genreReducer
})

export default mergedReducers