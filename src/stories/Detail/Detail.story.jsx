import React from 'react'
import { storiesOf } from '@storybook/react'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import Detail from '../../components/Detail/Detail'

const emptyState = { GameState: { machineSelected: null } }
const state = {
  GameState: {
    machineSelected: {
      cost: 1000,
      frequency: 1,
      name: 'Starter',
    },
  },
}
const mockStore = configureStore()
const emptyStore = mockStore(emptyState)
const store = mockStore(state)

storiesOf('Detail', module)
  .add('with no name, cost and frequency', () => (
    <Provider store={emptyStore}>
      <Detail />
    </Provider>
  ))
  .add('with name equals to Starter cost equals to 1000 and frequency equals to 1', () => (
    <Provider store={store}>
      <Detail />
    </Provider>
  ))
