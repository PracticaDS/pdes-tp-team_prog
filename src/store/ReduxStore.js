import { createStore, applyMiddleware, combineReducers, compose } from 'redux'

// Receive the reducers and the initialState (that right now we are not passing)
// Return an instance of redux store with your reducers, initial state and the middlewares
export default function configureStore(reducers, initialState) {
  const rootReducer = combineReducers(reducers)

  const middlewares = []

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

  return createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(...middlewares)))
}
