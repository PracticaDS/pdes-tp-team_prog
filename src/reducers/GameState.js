import {
  TICK,
  RESTART_CURRENCY,
  SELECT_MACHINE,
  SELECT_ACTION,
  SELECT_MOVE_BLOCK,
  DESELECT_MOVE_BLOCK,
  BUY_MACHINE,
  INCREMENT_CURRENCY,
  NEW_GAME_SUCCESS,
  PLAY_GAME_SUCCESS,
  CLEAN_GAME,
  UPDATE_GAME_BEGIN,
  UPDATE_GAME_SUCCESS,
  UPDATE_GAME_FAILURE,
} from '../utils/actionTypes'
import { SELECTION, EDITIONS } from '../utils/editionUtils'
import { DEFAULT_CURRENCY } from '../utils/defaultValues'

const statuses = {
  PAUSED: 'PAUSED',
  PLAYING: 'PLAYING',
  EDITING: 'EDITING',
}

export const saveStatuses = {
  WAITING: 'WAITING',
  SUCCESS: 'SUCCESS',
  FAILURE: 'FAILURE',
}

const gameState = {
  id: null,
  status: statuses.PAUSED,
  machineSelected: null,
  moveSelectedNode: null,
  saveState: saveStatuses.WAITING,
  actionSelected: SELECTION,
  currency: DEFAULT_CURRENCY,
  machineTypeSelected: '',
  tick: 0,
}

const changeActionSelected = (state, { actionType }) => ({
  ...state,
  actionSelected: actionType,
  machineSelected: EDITIONS.includes(actionType) ? null : state.machineSelected,
  moveSelectedNode: null,
})
const restartCurrency = state => ({ ...state, currency: DEFAULT_CURRENCY })
const incrementCurrency = (state, { addedCurrency }) => ({
  ...state,
  currency: state.currency + addedCurrency,
})
const nextTick = state => ({ ...state, tick: state.tick + 1 })
const changeMachineSelected = (state, { machine }) => ({
  ...state,
  machineSelected: machine,
  actionSelected: SELECTION,
  machineTypeSelected: machine.type,
  moveSelectedNode: null,
})

const changeSelectedMoveBlock = (state, node) => ({
  ...state,
  moveSelectedNode: node,
})

const buyMachine = (state, { price }) => ({
  ...state,
  currency: state.currency - price,
})

const deselectMoveBlock = state => ({
  ...state,
  moveSelectedNode: null,
})

const startGame = (state, { id }) => ({
  ...state,
  id,
})

const cleanGame = () => gameState

const playGame = (state, { id, currency }) => ({ ...state, id, currency })

const saveBegin = state => ({ ...state, saveState: saveStatuses.WAITING })
const saveFailure = state => ({ ...state, saveState: saveStatuses.FAILURE })
const saveSuccess = state => ({ ...state, saveState: saveStatuses.SUCCESS })

const ACTION_HANDLER_TYPES = {
  [TICK]: nextTick,
  [RESTART_CURRENCY]: restartCurrency,
  [SELECT_MACHINE]: changeMachineSelected,
  [SELECT_ACTION]: changeActionSelected,
  [SELECT_MOVE_BLOCK]: changeSelectedMoveBlock,
  [DESELECT_MOVE_BLOCK]: deselectMoveBlock,
  [BUY_MACHINE]: buyMachine,
  [INCREMENT_CURRENCY]: incrementCurrency,
  [NEW_GAME_SUCCESS]: startGame,
  [PLAY_GAME_SUCCESS]: playGame,
  [CLEAN_GAME]: cleanGame,
  [UPDATE_GAME_BEGIN]: saveBegin,
  [UPDATE_GAME_SUCCESS]: saveSuccess,
  [UPDATE_GAME_FAILURE]: saveFailure,
}

export const GameState = (state = gameState, { type, body }) => {
  const handler = ACTION_HANDLER_TYPES[type]
  return handler ? handler(state, body) : state
}
