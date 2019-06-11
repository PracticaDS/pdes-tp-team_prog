import {
  DELETE_GAME_FAILURE,
  DELETE_GAME_SUCCESS,
  LOGIN_BEGIN,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  NEW_GAME_SUCCESS,
} from '../utils/actionTypes'

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

const deleteGame = (state, { id }) => ({
  ...state,
  games: state.games.filter(g => g._id !== id),
})

const addGame = (state, game) => ({
  ...state,
  games: [...state.games, game],
})

const ACTION_HANDLER_TYPES = {
  [LOGIN_BEGIN]: loginBegin,
  [LOGIN_SUCCESS]: loginSuccess,
  [LOGIN_FAILURE]: loginFailure,
  [DELETE_GAME_SUCCESS]: deleteGame,
  [DELETE_GAME_FAILURE]: deleteGame,
  [NEW_GAME_SUCCESS]: addGame,
}

export const User = (state = userState, { type, body }) => {
  const handler = ACTION_HANDLER_TYPES[type]
  return handler ? handler(state, body) : state
}
