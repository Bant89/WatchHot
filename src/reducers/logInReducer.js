import { LOGIN_REQUEST, SUCCESS_LOGIN, FAILED_LOGIN, LOGOUT } from '../actions/index'

const logInReducer = (state = { 
  isLogged: false, 
  request_token: '',
  account_id: '',
  username: '',
  session_id: '',
  loading: false
}, action) => {
  switch(action.type){
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true
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