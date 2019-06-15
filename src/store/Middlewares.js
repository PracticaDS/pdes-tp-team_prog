import { TICK_BEGIN } from '../utils/actionTypes'
import { updateGame } from '../actions/GameState'

let stack = []

export const frameStackMiddleware = ({ dispatch }) => next => action => {
  if (action.type === TICK_BEGIN) {
    next(action)
    stack.forEach(ac => {
      dispatch(ac)
    })
    stack = []
  } else if (action.body && action.body.stack) {
    const newAction = action
    if (newAction.body && newAction.body.stack) {
      delete newAction.body.stack
    }
    stack.push(action)
  } else {
    next(action)
  }
}

let counts = 1

export const updateMiddleware = ({ getState, dispatch }) => next => action => {
  if (action.type === TICK_BEGIN) {
    const currentState = getState()
    if (counts % currentState.GameState.updateRate === 0) {
      const userId = currentState.User.id
      const game = {
        id: currentState.GameState.id,
        currency: currentState.GameState.currency,
        factory: currentState.Grid,
      }
      dispatch(updateGame(userId, game))
      counts = 0
    } else {
      counts++
    }
  }
  next(action)
}
