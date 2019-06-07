import {
  TICK,
  SELECT_MACHINE,
  SELECT_ACTION,
  SELECT_MOVE_BLOCK,
  DESELECT_MOVE_BLOCK,
  BUY_MACHINE,
  PLAY_GAME_BEGIN,
  PLAY_GAME_SUCCESS,
  PLAY_GAME_FAILURE,
  DELETE_GAME_BEGIN,
  DELETE_GAME_SUCCESS,
  DELETE_GAME_FAILURE,
  NEW_GAME_BEGIN,
  NEW_GAME_SUCCESS,
  NEW_GAME_FAILURE,
} from '../utils/actionTypes'
import {
  API_URL,
  createDeleteGameRequest,
  createNewGameRequest,
  createPlayGameRequest,
} from './utils'

export const createStackAction = ({ type, body }) => ({
  type,
  body: {
    ...body,
    stack: true,
  },
})

export const tick = () => ({
  type: TICK,
  body: {},
})

export const selectMachine = machine => ({
  type: SELECT_MACHINE,
  body: { machine },
})

export const selectAction = actionType => ({
  type: SELECT_ACTION,
  body: { actionType },
})

export const selectMoveBlock = node => ({
  type: SELECT_MOVE_BLOCK,
  body: { ...node },
})

export const deselectMoveBlock = () => ({
  type: DESELECT_MOVE_BLOCK,
  body: {},
})

export const buyMachine = price => ({
  type: BUY_MACHINE,
  body: { price },
})

const newGameBegin = () => ({
  type: NEW_GAME_BEGIN,
  body: {},
})
const newGameSuccess = ({ id }) => ({
  type: NEW_GAME_SUCCESS,
  body: { id },
})
const newGameFailure = ({ id }) => ({
  type: NEW_GAME_FAILURE,
  body: { id },
})

export const newGame = userId => dispatch => {
  dispatch(newGameBegin(userId))
  return fetch(`${API_URL}/users/${userId}/games/`, createNewGameRequest())
    .then(() => {
      // .then(res => res.json())
      // .then(({ result }) => {
      //   dispatch(newGameSuccess(result))
      dispatch(newGameSuccess({ id: userId }))
    })
    .catch(() => {
      // dispatch(newGameFailure(err))
      dispatch(newGameFailure({ id: userId }))
    })
}

export const playGameBegin = () => ({
  type: PLAY_GAME_BEGIN,
  body: {},
})
export const playGameSuccess = result => ({
  type: PLAY_GAME_SUCCESS,
  body: { ...result },
})
export const playGameFailure = result => ({
  type: PLAY_GAME_FAILURE,
  body: { ...result },
})

export const playGame = (userId, gameId) => dispatch => {
  dispatch(playGameBegin(gameId))
  return fetch(`${API_URL}/users/${userId}/games/${gameId}`, createPlayGameRequest(gameId))
    .then(res => res.json())
    .then(({ result }) => {
      dispatch(playGameSuccess(result))
    })
    .catch(err => {
      dispatch(playGameFailure(err))
    })
}

export const deleteGameBegin = () => ({
  type: DELETE_GAME_BEGIN,
  body: {},
})
export const deleteGameSuccess = result => ({
  type: DELETE_GAME_SUCCESS,
  body: { ...result },
})
export const deleteGameFailure = result => ({
  type: DELETE_GAME_FAILURE,
  body: { ...result },
})

export const deleteGame = (userId, gameId) => dispatch => {
  dispatch(deleteGameBegin(gameId))
  return fetch(`${API_URL}/users/${userId}/games/${gameId}`, createDeleteGameRequest(gameId))
    .then(res => res.json())
    .then(({ result }) => {
      dispatch(deleteGameSuccess(result))
    })
    .catch(err => {
      dispatch(deleteGameFailure(err))
    })
}
