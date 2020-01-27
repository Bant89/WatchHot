import { LOGIN, SUCCESS_LOGIN, FAILED_LOGIN, LOGOUT } from '../actions/index'


const logInReducer = (state = { isLogged: false, name: '', password: '' }, action) => {
  switch(action.type){
    case LOGIN:
      return {
        isLogged: true,
        name: action.payload.name,
        password: action.payload.password
      }
    case SUCCESS_LOGIN:
      return {
        ...state,
        isLogged: true
      }
    case FAILED_LOGIN:
      return {
        ...state,
        isLogged: false
      }
    case LOGOUT: 
      return {
        ...state,
        isLogged: false
      }
    default:
      return state;
  }
}

export default logInReducer