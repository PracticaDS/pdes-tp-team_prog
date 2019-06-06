import { TICK } from '../utils/actionTypes'

let stack = []

export const frameStackMiddleware = ({ dispatch }) => next => action => {
  if (action.type === TICK) {
    next(action)
    stack.forEach(ac => {
      dispatch(ac)
    })
    stack = []
  } else if (action.body.stack) {
    const newAction = action
    if (newAction.body && newAction.body.stack) {
      delete newAction.body.stack
    }

    stack.push(action)
  } else {
    next(action)
  }
}
