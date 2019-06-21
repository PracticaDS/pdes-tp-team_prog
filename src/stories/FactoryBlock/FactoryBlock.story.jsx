import React from 'react'
import { Provider } from 'react-redux'
import { storiesOf } from '@storybook/react'
import configureStore from 'redux-mock-store'
import Block from '../../components/FactoryBlock/BlockConnected'
import { renderNode } from '../../components/FactoryGrid/FactoryGridConnected'

const state = {
  updateBlock: () => true,
  Grid: {
    gridValues: [
      [
        { machine: { type: 'Empty' }, position: { row: 0, column: 0 } },
        { machine: { type: 'Crafter' }, position: { row: 0, column: 1 } },
      ],
      [
        { machine: { type: 'Empty' }, position: { row: 1, column: 0 } },
        { machine: { type: 'Crafter' }, position: { row: 1, column: 1 } },
      ],
    ],
  },
  GameState: {
    machineSelected: null,
  },
}
const mockStore = configureStore()
const store = mockStore(state)

storiesOf('FactoryBlock', module)
  .add('Simple EmptyBlock', () => (
    <Provider store={store}>
      <Block position={{ row: 0, column: 0 }} renderNode={renderNode} />
    </Provider>
  ))
  .add('With a MachineNode', () => (
    <Provider store={store}>
      <Block position={{ row: 0, column: 1 }} renderNode={renderNode} />
    </Provider>
  ))
