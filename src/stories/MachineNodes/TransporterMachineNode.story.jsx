import React from 'react'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { storiesOf } from '@storybook/react'
import TransporterMachineNode from '../../components/MachineNodes/TransporterMachineNode/TransporterMachineNode'

const state = {
  Grid: {},
  GameState: {},
}
const mockStore = configureStore()
const store = mockStore(state)

storiesOf('TransporterMachineNode', module).add('TransporterMachineNode', () => (
  <Provider store={store}>
    <div className="MachineStoryBook">
      <TransporterMachineNode />
    </div>
  </Provider>
))
