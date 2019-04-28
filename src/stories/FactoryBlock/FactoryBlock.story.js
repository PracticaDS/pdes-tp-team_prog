/* eslint-disable react/jsx-filename-extension */
import React from 'react'
import { storiesOf } from '@storybook/react'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import Block from '../../components/FactoryBlock/Block'

const state = {
  updateBlock: () => true,
  GameState: {
    machineSelected: 'bla',
  },
}
const mockStore = configureStore()
const store = mockStore(state)

storiesOf('FactoryBlock', module)
  .add('Simple EmptyBlock', () => (
    <Provider store={store}>
      <Block position={{ row: 1, column: 1 }} node={{ type: 'Empty' }} />
    </Provider>
  ))
  .add('With a MachineNode', () => (
    <Provider store={store}>
      <Block position={{ row: 1, column: 1 }} node={{ type: 'Empty' }} />
    </Provider>
  ))
