import {
  SELECT_MACHINE,
  SELECT_ACTION,
  SELECT_MOVE_BLOCK,
  DESELECT_MOVE_BLOCK,
  BUY_MACHINE,
  CLEAN_GAME,
  TICK_BEGIN,
  TICK_SUCCESS,
} from '../utils/actionTypes'
import { createThunk, DELETE, GET, PUT, POST, SUCCESS, createAction } from './utils'
import { TIMER_TIME } from '../utils/defaultValues'

export const createStackAction = ({ type, body }) => ({
  type,
  body: {
    ...body,
    stack: true,
  },
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

export const cleanGame = () => ({
  type: CLEAN_GAME,
  body: {},
})

const NEW_GAME = 'NEW_GAME'

export const newGame = (userId, game) => {
  const parse = ({ result, type }) => (type === SUCCESS ? { ...result, id: result._id } : {})
  return createThunk({
    action: NEW_GAME,
    url: `/users/${userId}/games`,
    payload: game,
    parse,
    method: POST,
  })
}

const PLAY_GAME = 'PLAY_GAME'

export const playGame = (userId, gameId) => {
  const parse = ({ result, type }) => (type === SUCCESS ? { ...result, id: result._id } : {})
  return createThunk({
    action: PLAY_GAME,
    url: `/users/${userId}/games/${gameId}`,
    parse,
    method: GET,
  })
}

const DELETE_GAME = 'DELETE_GAME'

export const deleteGame = (userId, gameId) => {
  const parse = ({ type }) => (type === SUCCESS ? { id: gameId } : {})
  return createThunk({
    action: DELETE_GAME,
    url: `/users/${userId}/games/${gameId}`,
    parse,
    method: DELETE,
  })
}

const UPDATE_GAME = 'UPDATE_GAME'

export const updateGame = (userId, game) => {
  const parse = ({ result, type }) => (type === SUCCESS ? { ...result, id: game.id } : {})
  return createThunk({
    action: UPDATE_GAME,
    url: `/users/${userId}/games/${game.id}`,
    payload: game,
    parse,
    method: PUT,
  })
}

export const tick = () => dispatch => {
  dispatch(createAction(TICK_BEGIN))
  return new Promise(resolve => {
    setTimeout(() => {
      dispatch(createAction(TICK_SUCCESS))
      resolve()
    }, TIMER_TIME / 2)
  })
}
