import { PLAY_GAME, TICK, RESTART_CURRENCY, SELECT_MACHINE } from '../utils/actionTypes'

const statuses = {
  PAUSED: 'PAUSED',
  PLAYING: 'PLAYING',
  EDITING: 'EDITING',
}
const initialState = {
  status: statuses.PAUSED,
  machineSelected: null,
  currency: 0,
  tick: 0,
}

const playGame = state => ({ ...state, status: statuses.PLAYING })
const restartCurrency = state => ({ ...state, currency: 0 })
const nextTick = state => ({ ...state, tick: state.tick + 1 })
const changeMachineSelected = (state, { machine }) => ({
  ...state,
  machineSelected: machine,
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
