import {
  DELETE_GAME_FAILURE,
  DELETE_GAME_SUCCESS,
  LOGIN_BEGIN,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  NEW_GAME_SUCCESS,
  GET_GAMES_SUCCESS,
} from '../utils/actionTypes'

const userState = {
  id: null,
  username: '',
  games: [],
  isFetching: false,
}

const loginBegin = state => ({
  ...state,
  isFetching: true,
})
const loginSuccess = (state, { id, username }) => ({
  ...state,
  id,
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

const getGames = (state, games) => ({
  ...state,
  games,
})

const ACTION_HANDLER_TYPES = {
  [LOGIN_BEGIN]: loginBegin,
  [LOGIN_SUCCESS]: loginSuccess,
  [LOGIN_FAILURE]: loginFailure,
  [DELETE_GAME_SUCCESS]: deleteGame,
  [DELETE_GAME_FAILURE]: deleteGame,
  [NEW_GAME_SUCCESS]: addGame,
  [GET_GAMES_SUCCESS]: getGames,
}

export const User = (state = userState, { type, body }) => {
  const handler = ACTION_HANDLER_TYPES[type]
  return handler ? handler(state, body) : state
}
