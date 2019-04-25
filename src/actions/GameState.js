import { PLAY_GAME, NEXT_TICK } from '../utils/actionTypes'

export const playGame = () => ({
  type: PLAY_GAME,
})

export const nextTick = () => ({
  type: NEXT_TICK,
})
