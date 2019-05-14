import React from 'react'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { storiesOf } from '@storybook/react'
import EmptyMachineNode from '../../components/MachineNodes/EmptyMachineNode/EmptyMachineNode'

const state = {
  Grid: {},
  GameState: {},
}
const mockStore = configureStore()
const store = mockStore(state)

storiesOf('EmptyMachineNode', module).add('EmptyMachineNode', () => (
  <Provider store={store}>
    <div className="MachineStoryBook">
      <EmptyMachineNode />
    </div>
  </Provider>
))
