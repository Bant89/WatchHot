export const LOGIN = 'LOGIN'

export const login = ({ name, password }) => {
  return {
    type: LOGIN,
    payload: {
      name,
      password
    }
  }
}

export const SUCCESS_LOGIN = 'SUCCESS_LOGIN'

export const success_login = () => {
  return {
    type: SUCCESS_LOGIN,
    status: 'success'
  }
}

export const FAILED_LOGIN = 'FAILED_LOGIN'

export const failed_login = () => {
  return {
    type: FAILED_LOGIN,
    status: 'error',
    error: 'error'
  }
}

export const LOGOUT = 'LOGOUT'

export const logout = () => {
  return {
    type: LOGOUT
  }
}

export const CHANGE_GENRE = 'CHANGE_GENRE'

export const change_genre = ({ id, name }) => {
  return {
    type: CHANGE_GENRE,
    payload: {
      id,
      name
    }
  }
}

export const GET_GENRE = 'GET_GENRE'

export const get_genre = () => {
  return {
    type: GET_GENRE
  }
}