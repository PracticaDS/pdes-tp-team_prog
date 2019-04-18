import React from 'react'

import { storiesOf } from '@storybook/react'
import crafter from '../../assets/crafter.png'
import furnace from '../../assets/furnace.png'
import seller from '../../assets/seller.png'
import starter from '../../assets/starter.png'
import transporter from '../../assets/transporter.png'

import Machine from './Machine'

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

storiesOf('Machine', module).add('Crafter', () => <Machine machine={crafterMachine} />)
storiesOf('Machine', module).add('Furnace', () => <Machine machine={furnaceMachine} />)
storiesOf('Machine', module).add('Seller', () => <Machine machine={sellerMachine} />)
storiesOf('Machine', module).add('Starter', () => <Machine machine={starterMachine} />)
storiesOf('Machine', module).add('Transporter', () => <Machine machine={transporterMachine} />)
