import React from 'react'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { storiesOf } from '@storybook/react'
import FurnaceMachineNode from '../../components/MachineNodes/FurnaceMachineNode/FurnaceMachineNode'

const state = {
  Grid: {},
  GameState: {},
}
const mockStore = configureStore()
const store = mockStore(state)

storiesOf('FurnaceMachineNode', module).add('FurnaceMachineNode', () => (
  <Provider store={store}>
    <div className="MachineStoryBook">
      <FurnaceMachineNode />
    </div>
  </Provider>
))
