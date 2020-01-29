// USER LOGIN ACTIONS && ACTION CREATORS
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

// GENRE ACTIONS && ACTION CREATORS

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

// MAIN CONTENT DATA REQUESTS ACTIONS && ACTIONS CREATORS

export const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST'

export const get_data = () => {
  return {
    type: FETCH_DATA_REQUEST
  }
}

export const FETCH_DATA_ERROR = 'FETCH_DATA_ERROR'

export const data_error = (error) => {
  return {
    type: FETCH_DATA_ERROR,
    error
  }
}

export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS'

export const data_success = (results) => {
  return {
    type: FETCH_DATA_SUCCESS,
    payload: {
      results
    }
  }
}

// DETAIL CONTENT DATA REQUESTS ACTIONS && ACTIONS CREATORS

export const DETAIL_DATA_REQUEST = 'DETAIL_DATA_REQUEST'

export const get_detail_data = () => {
  return {
    type: DETAIL_DATA_REQUEST
  }
}

export const DETAIL_DATA_ERROR = 'DETAIL_DATA_ERROR'

export const detail_data_error = (error) => {
  return {
    type: DETAIL_DATA_ERROR,
    error
  }
}

export const DETAIL_DATA_SUCCESS = 'DETAIL_DATA_SUCCESS'

export const detail_data_success = (result, videos) => {
  return {
    type: DETAIL_DATA_SUCCESS,
    payload: {
      result,
      videos
    }
  }
}

// SIMILAR CONTENT DATA REQUESTS ACTIONS && ACTIONS CREATORS

export const SIMILAR_DATA_REQUEST = 'SIMILAR_DATA_REQUEST'

export const get_similar_data = () => {
  return {
    type: SIMILAR_DATA_REQUEST
  }
}

export const SIMILAR_DATA_ERROR = 'SIMILAR_DATA_ERROR'

export const similar_data_error = (error) => {
  return {
    type: SIMILAR_DATA_ERROR,
    error
  }
}

export const SIMILAR_DATA_SUCCESS = 'SIMILAR_DATA_SUCCESS'

export const similar_data_success = (results) => {
  return {
    type: SIMILAR_DATA_SUCCESS,
    payload: {
      results
    }
  }
}