import React from 'react'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { storiesOf } from '@storybook/react'
import CrafterMachineNode from '../../components/MachineNodes/CrafterMachineNode/CrafterMachineNode'
import './MachineStoryBook.css'

const state = {
  Grid: {},
  GameState: {},
}
const mockStore = configureStore()
const store = mockStore(state)

storiesOf('CrafterMachineNode', module).add('CrafterMachineNode', () => (
  <Provider store={store}>
    <div className="MachineStoryBook">
      <CrafterMachineNode />
    </div>
  </Provider>
))
