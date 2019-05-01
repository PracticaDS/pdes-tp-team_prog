import React from 'react'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { storiesOf } from '@storybook/react'
import SellerMachineNode from '../../components/MachineNodes/SellerMachineNode/SellerMachineNode'

const state = {
  Grid: {},
  GameState: {},
}
const mockStore = configureStore()
const store = mockStore(state)

storiesOf('SellerMachineNode', module).add('SellerMachineNode', () => (
  <Provider store={store}>
    <div className="MachineStoryBook">
      <SellerMachineNode />
    </div>
  </Provider>
))
