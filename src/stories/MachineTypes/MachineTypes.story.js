/* eslint-disable react/jsx-filename-extension */
import React from 'react'

import { storiesOf } from '@storybook/react'
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

storiesOf('MachineTypes', module).add('Empty', () => <MachineTypes elements={[]} />)

storiesOf('MachineTypes', module).add('Single Row not full', () => (
  <MachineTypes elements={myElements.slice(0, 3)} />
))

storiesOf('MachineTypes', module).add('Single Row full', () => (
  <MachineTypes elements={myElements.slice(0, 4)} />
))

storiesOf('MachineTypes', module).add("2 Rows, 1 full, last one isn't", () => (
  <MachineTypes elements={myElements.slice(0, 5)} />
))
