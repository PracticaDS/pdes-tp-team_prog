import { PLAY_GAME, NEXT_TICK, RESTART_CURRENCY } from '../utils/actionTypes'

const STATES = {
  PAUSED: 'PAUSED',
  PLAYING: 'PLAYING',
  EDITING: 'EDITING',
}
const initialState = {
  gameState: STATES.PAUSED,
  currency: 0,
  tick: 0,
}

const playGame = state => ({ ...state, gameState: STATES.PLAYING })
const restartCurrency = state => ({ ...state, currency: 0 })
const nextTick = state => ({ ...state, tick: state.tick + 1 })

export const GameState = (state = initialState, action) => {
  const { type } = action
  switch (type) {
    case `${PLAY_GAME}`:
      return playGame(state)
    case `${NEXT_TICK}`:
      return nextTick(state)
    case `${RESTART_CURRENCY}`:
      return restartCurrency(state)
    default:
      return state
  }
}
