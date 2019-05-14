import React from 'react'

import { storiesOf } from '@storybook/react'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import crafter from '../../assets/crafter.png'
import furnace from '../../assets/furnace.png'
import seller from '../../assets/seller.png'
import starter from '../../assets/starter.png'
import transporter from '../../assets/transporter.png'

import MachineTypes from '../../components/MachineTypes/MachineTypes'

const myElements = [
  {
    image: starter,
    title: 'Starter',
  },
  {
    image: seller,
    title: 'Seller',
  },
  {
    image: crafter,
    title: 'Crafter',
  },
  {
    image: furnace,
    title: 'Furnace',
  },
  {
    image: transporter,
    title: 'Transporter',
  },
]

const state = {
  GameState: {},
}
const mockStore = configureStore()
const store = mockStore(state)
const renderMachine = machine => machine

storiesOf('MachineTypes', module).add('Empty', () => (
  <Provider store={store}>
    <MachineTypes elements={[]} renderMachine={renderMachine} />
  </Provider>
))

storiesOf('MachineTypes', module).add('Single Row not full', () => (
  <Provider store={store}>
    <MachineTypes elements={myElements.slice(0, 3)} renderMachine={renderMachine} />
  </Provider>
))

storiesOf('MachineTypes', module).add('Single Row full', () => (
  <Provider store={store}>
    <MachineTypes elements={myElements.slice(0, 4)} renderMachine={renderMachine} />
  </Provider>
))

storiesOf('MachineTypes', module).add("2 Rows, 1 full, last one isn't", () => (
  <Provider store={store}>
    <MachineTypes elements={myElements.slice(0, 5)} renderMachine={renderMachine} />
  </Provider>
))
