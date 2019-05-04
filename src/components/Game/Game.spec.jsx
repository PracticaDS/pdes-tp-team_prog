import React from 'react'
import renderer from 'react-test-renderer'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import Game from './Game'

it('render simple Game Component', () => {
  const state = {
    restartCurrency: () => true,
    startGame: () => true,
    tick: () => true,
    Grid: {
      dimensions: { n: 6, m: 6 },
      gridValues: Array(6).fill(Array(6).fill({ machine: { type: 'Empty' } })),
    },
    GameState: {
      currency: 1000,
    },
  }
  const mockStore = configureStore()
  const store = mockStore(state)
  const tree = renderer.create(
    <Provider store={store}>
      <Game />
    </Provider>,
  )
  expect(tree).not.toBe(null)
})
