import {
  PLAY_GAME,
  TICK,
  RESTART_CURRENCY,
  SELECT_MACHINE,
  SELECT_ACTION,
} from '../utils/actionTypes'
import { SELECTION } from '../utils/editionUtils'

const STATES = {
  PAUSED: 'PAUSED',
  PLAYING: 'PLAYING',
  EDITING: 'EDITING',
}
const initialState = {
  gameState: STATES.PAUSED,
  machineSelected: null,
  actionSelected: SELECTION,
  currency: 0,
  tick: 0,
}

const playGame = state => ({ ...state, gameState: STATES.PLAYING })
const changeActionSelected = (state, { actionType }) => ({
  ...state,
  actionSelected: actionType,
  machineSelected: actionType !== SELECTION ? null : state.machineSelected,
})
const restartCurrency = state => ({ ...state, currency: 0 })
const nextTick = state => ({ ...state, tick: state.tick + 1 })
const changeMachineSelected = (state, body) => ({
  ...state,
  machineSelected: body.machineType ? body.machineType : state.machineSelected,
  actionSelected: SELECTION,
})

const ACTION_HANDLER_TYPES = {
  [PLAY_GAME]: playGame,
  [TICK]: nextTick,
  [RESTART_CURRENCY]: restartCurrency,
  [SELECT_MACHINE]: changeMachineSelected,
  [SELECT_ACTION]: changeActionSelected,
}

export const GameState = (state = initialState, { type, body }) => {
  const handler = ACTION_HANDLER_TYPES[type]
  return handler ? handler(state, body) : state
}
