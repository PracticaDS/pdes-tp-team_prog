import React from 'react'

import { storiesOf } from '@storybook/react'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import crafter from '../../assets/crafter.png'
import furnace from '../../assets/furnace.png'
import seller from '../../assets/seller.png'
import starter from '../../assets/starter.png'
import transporter from '../../assets/transporter.png'

import Machine from '../../components/Machine/Machine'

const crafterMachine = {
  title: 'Crafter',
  image: crafter,
}
const furnaceMachine = {
  title: 'Furnace',
  image: furnace,
}
const sellerMachine = {
  title: 'Seller',
  image: seller,
}
const starterMachine = {
  title: 'Starter',
  image: starter,
}
const transporterMachine = {
  title: 'Transporter',
  image: transporter,
}

const state = {
  GameState: {},
}
const mockStore = configureStore()
const store = mockStore(state)

storiesOf('Machine', module).add('Crafter', () => (
  <Provider store={store}>
    <Machine machine={crafterMachine} />
  </Provider>
))
storiesOf('Machine', module).add('Furnace', () => (
  <Provider store={store}>
    <Machine machine={furnaceMachine} />
  </Provider>
))
storiesOf('Machine', module).add('Seller', () => (
  <Provider store={store}>
    <Machine machine={sellerMachine} />
  </Provider>
))
storiesOf('Machine', module).add('Starter', () => (
  <Provider store={store}>
    <Machine machine={starterMachine} />
  </Provider>
))
storiesOf('Machine', module).add('Transporter', () => (
  <Provider store={store}>
    <Machine machine={transporterMachine} />
  </Provider>
))
