import { PLAY_GAME, TICK, RESTART_CURRENCY, SELECT_MACHINE } from '../utils/actionTypes'

const STATES = {
  PAUSED: 'PAUSED',
  PLAYING: 'PLAYING',
  EDITING: 'EDITING',
}
const initialState = {
  gameState: STATES.PAUSED,
  machineSelected: null,
  currency: 0,
  tick: 0,
}

const playGame = state => ({ ...state, gameState: STATES.PLAYING })
const restartCurrency = state => ({ ...state, currency: 0 })
const nextTick = state => ({ ...state, tick: state.tick + 1 })
const changeMachineSelected = (state, body) => ({
  ...state,
  machineSelected: body.machineType ? body.machineType : state.machineSelected,
})

const ACTION_HANDLER_TYPES = {
  [PLAY_GAME]: playGame,
  [TICK]: nextTick,
  [RESTART_CURRENCY]: restartCurrency,
  [SELECT_MACHINE]: changeMachineSelected,
}

export const GameState = (state = initialState, { type, body }) => {
  const handler = ACTION_HANDLER_TYPES[type]
  return handler ? handler(state, body) : state
}
