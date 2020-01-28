import { combineReducers } from 'redux'
import logInReducer from './logInReducer'
import genreReducer from './genreReducer'
import mainDataReducer from './mainDataReducer'

const mergedReducers = combineReducers({
  logUser: logInReducer,
  genre: genreReducer,
  mainData: mainDataReducer
})

export default mergedReducers