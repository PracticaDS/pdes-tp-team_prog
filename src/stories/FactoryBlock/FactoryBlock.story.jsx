import React from 'react'
import { Provider } from 'react-redux'
import { storiesOf } from '@storybook/react'
import configureStore from 'redux-mock-store'
import Block from '../../components/FactoryBlock/BlockConnected'
import EmptyMachineNode from '../../components/MachineNodes/EmptyMachineNode/EmptyMachineNode'

const state = {
  updateBlock: () => true,
  Grid: {
    gridValues: [
      [{ machine: { type: 'Empty' } }, { machine: { type: 'Crafter' } }],
      [{ machine: { type: 'Empty' } }, { machine: { type: 'Crafter' } }],
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
      <Block position={{ row: 0, column: 0 }} renderNode={() => <EmptyMachineNode />} />
    </Provider>
  ))
  .add('With a MachineNode', () => (
    <Provider store={store}>
      <Block position={{ row: 0, column: 1 }} renderNode={() => <EmptyMachineNode />} />
    </Provider>
  ))
