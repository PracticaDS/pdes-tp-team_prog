import React from 'react'
import { storiesOf } from '@storybook/react'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import FactoryGrid from '../../components/FactoryGrid/FactoryGrid'

const state = {
  restartCurrency: () => true,
  startGame: () => true,
  tick: () => true,
  Grid: {
    dimensions: { n: 6, m: 6 },
    gridValues: Array(6).fill(Array(6).fill({ machine: { type: 'Crafter' } })),
  },
  GameState: {
    currency: 1000,
  },
}
const mockStore = configureStore()
const store = mockStore(state)

storiesOf('FactoryGrid', module).add('Simple Grid with 1x2 empty blocks', () => (
  <Provider store={store}>
    <FactoryGrid />
  </Provider>
))
