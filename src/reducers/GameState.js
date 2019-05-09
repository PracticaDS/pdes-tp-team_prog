import {
  PLAY_GAME,
  TICK,
  RESTART_CURRENCY,
  SELECT_MACHINE,
  SELECT_ACTION,
  SELECT_MOVE_BLOCK,
  DESELECT_MOVE_BLOCK,
  BUY_MACHINE,
} from '../utils/actionTypes'
import { SELECTION, EDITIONS } from '../utils/editionUtils'
import { DEFAULT_CURRENCY } from '../utils/defaultValues'

const statuses = {
  PAUSED: 'PAUSED',
  PLAYING: 'PLAYING',
  EDITING: 'EDITING',
}
const initialState = {
  status: statuses.PAUSED,
  machineSelected: null,
  moveSelectedNode: null,
  actionSelected: SELECTION,
  currency: DEFAULT_CURRENCY,
  machineTypeSelected: '',
  tick: 0,
}

const playGame = state => ({ ...state, status: statuses.PLAYING })
const changeActionSelected = (state, { actionType }) => ({
  ...state,
  actionSelected: actionType,
  machineSelected: EDITIONS.includes(actionType) ? null : state.machineSelected,
  moveSelectedNode: null,
})
const restartCurrency = state => ({ ...state, currency: DEFAULT_CURRENCY })
const nextTick = state => ({ ...state, tick: state.tick + 1 })
const changeMachineSelected = (state, { machine }) => ({
  ...state,
  machineSelected: machine,
  actionSelected: SELECTION,
  machineTypeSelected:
    machine.type !== state.machineTypeSelected ? machine.type : state.machineTypeSelected,
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

const ACTION_HANDLER_TYPES = {
  [PLAY_GAME]: playGame,
  [TICK]: nextTick,
  [RESTART_CURRENCY]: restartCurrency,
  [SELECT_MACHINE]: changeMachineSelected,
  [SELECT_ACTION]: changeActionSelected,
  [SELECT_MOVE_BLOCK]: changeSelectedMoveBlock,
  [DESELECT_MOVE_BLOCK]: deselectMoveBlock,
  [BUY_MACHINE]: buyMachine,
}

export const GameState = (state = initialState, { type, body }) => {
  const handler = ACTION_HANDLER_TYPES[type]
  return handler ? handler(state, body) : state
}
