import { API_URL, createUserRequest } from './utils'
import { LOGIN_BEGIN, LOGIN_FAILURE, LOGIN_SUCCESS } from '../utils/actionTypes'

const loginBegin = user => ({
  type: LOGIN_BEGIN,
  body: { ...user },
})

const loginSuccess = user => ({
  type: LOGIN_SUCCESS,
  body: { ...user },
})

const loginFailure = user => ({
  type: LOGIN_FAILURE,
  body: { ...user },
})

export const login = user => dispatch => {
  dispatch(loginBegin(user))
  return fetch(`${API_URL}/user/login`, createUserRequest(user))
    .then(res => res.json())
    .then(({ result }) => {
      dispatch(loginSuccess(result))
    })
    .catch(err => {
      dispatch(loginFailure(err))
    })
}
