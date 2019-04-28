/* eslint-disable react/jsx-filename-extension */
import React from 'react'
import { storiesOf } from '@storybook/react'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import Game from '../../components/Game/Game'

const state = {
  restartCurrency: () => true,
  startGame: () => true,
  tick: () => true,
  Grid: { dimensions: { n: 6, m: 6 } },
  GameState: {
    currency: 1000,
  },
}
const mockStore = configureStore()
const store = mockStore(state)

// n columns, m rows
storiesOf('Game', module).add('Simple Game component', () => (
  <Provider store={store}>
    <Game restartCurrency={() => 2} startGame={() => 1} dimensions={{ n: 10, m: 8 }} />
  </Provider>
))
