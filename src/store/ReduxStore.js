import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import { routerReducer } from 'react-router-redux'
import thunk from 'redux-thunk'
import * as reducers from './Reducers'
import { frameStackMiddleware } from './Middlewares'

const createReducer = () =>
  combineReducers({
    ...reducers,
    router: routerReducer,
  })

// Receive the reducers and the initialState (that right now we are not passing)
// Return an instance of redux store with your reducers, initial state and the middlewares
export default function configureStore(initialState) {
  const middlewares = [frameStackMiddleware, thunk]

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

  return createStore(
    createReducer(),
    initialState,
    composeEnhancers(applyMiddleware(...middlewares)),
  )
}
