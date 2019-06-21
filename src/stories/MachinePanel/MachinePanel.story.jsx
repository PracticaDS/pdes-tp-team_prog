import React from 'react'

import { storiesOf } from '@storybook/react'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import MachinePanel from '../../components/Panel/MachinePanel'
import StarterMachineOption from '../../components/Machine/Option/StarterMachineOption'
import SellerMachineOption from '../../components/Machine/Option/SellerMachineOption'
import CrafterMachineOption from '../../components/Machine/Option/CrafterMachineOption'
import FurnaceMachineOption from '../../components/Machine/Option/FurnaceMachineOption'
import TransporterMachineOption from '../../components/Machine/Option/TransporterMachineOption'

const myElements = [
  StarterMachineOption,
  SellerMachineOption,
  CrafterMachineOption,
  FurnaceMachineOption,
  TransporterMachineOption,
]

const state = {
  GameState: {},
}
const mockStore = configureStore()
const store = mockStore(state)

storiesOf('MachinePanel', module).add('Empty', () => (
  <Provider store={store}>
    <MachinePanel machines={[]} />
  </Provider>
))

storiesOf('MachinePanel', module).add('Single Row not full', () => (
  <Provider store={store}>
    <MachinePanel machines={myElements.slice(0, 3)} />
  </Provider>
))

storiesOf('MachinePanel', module).add('Single Row full', () => (
  <Provider store={store}>
    <MachinePanel machines={myElements.slice(0, 4)} />
  </Provider>
))

storiesOf('MachinePanel', module).add("2 Rows, 1 full, last one isn't", () => (
  <Provider store={store}>
    <MachinePanel machines={myElements.slice(0, 5)} />
  </Provider>
))
