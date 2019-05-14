import React from 'react'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { storiesOf } from '@storybook/react'
import StarterMachineNode from '../../components/MachineNodes/StarterMachineNode/StarterMachineNode'

const state = {
  Grid: {},
  GameState: {},
}
const mockStore = configureStore()
const store = mockStore(state)

storiesOf('StarterMachineNode', module).add('StarterMachineNode', () => (
  <Provider store={store}>
    <div className="MachineStoryBook">
      <StarterMachineNode />
    </div>
  </Provider>
))
