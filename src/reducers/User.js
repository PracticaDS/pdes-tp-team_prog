import { LOGIN_BEGIN, LOGIN_FAILURE, LOGIN_SUCCESS } from '../utils/actionTypes'

const userState = {
  id: null,
  username: '',
  games: [],
}

const loginBegin = () => ({
  isFetching: true,
})
const loginSuccess = (state, { _id, games, username }) => ({
  id: _id,
  games,
  username,
  isFetching: false,
})
const loginFailure = () => ({
  isFetching: false,
})

const ACTION_HANDLER_TYPES = {
  [LOGIN_BEGIN]: loginBegin,
  [LOGIN_SUCCESS]: loginSuccess,
  [LOGIN_FAILURE]: loginFailure,
}

export const User = (state = userState, { type, body }) => {
  const handler = ACTION_HANDLER_TYPES[type]
  return handler ? handler(state, body) : state
}
