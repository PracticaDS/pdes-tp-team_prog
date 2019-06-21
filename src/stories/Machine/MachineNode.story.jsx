import React from 'react'
import { storiesOf } from '@storybook/react'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import FurnaceMachine from '../../components/Machine/Node/FurnaceMachineNode'
import CrafterMachine from '../../components/Machine/Node/CrafterMachineNode'
import SellerMachine from '../../components/Machine/Node/SellerMachineNode'
import StarterMachine from '../../components/Machine/Node/StarterMachineNode'
import TransporterMachine from '../../components/Machine/Node/TransporterMachineNode'
import './Machine.story.css'

const state = {
  Grid: {
    dimensions: { n: 1, m: 1 },
  },
  GameState: {
    tick: 0,
    isUpdating: false,
  },
}
const mockStore = configureStore()
const store = mockStore(state)

storiesOf('MachineNode', module).add('Crafter', () => (
  <Provider store={store}>
    <div className="machine-story-book">
      <CrafterMachine />
    </div>
  </Provider>
))
storiesOf('MachineNode', module).add('Furnace', () => (
  <Provider store={store}>
    <div className="machine-story-book">
      <FurnaceMachine />
    </div>
  </Provider>
))
storiesOf('MachineNode', module).add('Seller', () => (
  <Provider store={store}>
    <div className="machine-story-book">
      <SellerMachine />
    </div>
  </Provider>
))
storiesOf('MachineNode', module).add('Starter', () => (
  <Provider store={store}>
    <div className="machine-story-book">
      <StarterMachine />
    </div>
  </Provider>
))
storiesOf('MachineNode', module).add('Transporter', () => (
  <Provider store={store}>
    <div className="machine-story-book">
      <TransporterMachine />
    </div>
  </Provider>
))
