import { PLAY_GAME, TICK, SELECT_MACHINE, SELECT_ACTION } from '../utils/actionTypes'

export const playGame = () => ({
  type: PLAY_GAME,
  body: {},
})

export const tick = () => ({
  type: TICK,
  body: {},
})

export const selectMachine = machineType => ({
  type: SELECT_MACHINE,
  body: { machineType },
})

export const selectAction = actionType => ({
  type: SELECT_ACTION,
  body: { actionType },
})
