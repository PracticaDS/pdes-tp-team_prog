import {
  PLAY_GAME,
  TICK,
  SELECT_MACHINE,
  SELECT_ACTION,
  SELECT_MOVE_BLOCK,
  DESELECT_MOVE_BLOCK,
} from '../utils/actionTypes'

export const playGame = () => ({
  type: PLAY_GAME,
  body: {},
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
