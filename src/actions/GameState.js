import { PLAY_GAME, TICK, SELECT_MACHINE } from '../utils/actionTypes'

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
