import React from 'react'

import { storiesOf } from '@storybook/react'
import FurnaceMachine from '../../components/Machine/FurnaceMachine/FurnaceMachine'
import CrafterMachine from '../../components/Machine/CrafterMachine/CrafterMachine'
import SellerMachine from '../../components/Machine/SellerMachine/SellerMachine'
import StarterMachine from '../../components/Machine/StarterMachine/StarterMachine'
import TransporterMachine from '../../components/Machine/TransporterMachine/TransporterMachine'

const machineSelected = {}
const selectMachine = () => null

storiesOf('Machine', module).add('Crafter', () => (
  <CrafterMachine machineSelected={machineSelected} selectMachine={selectMachine} />
))
storiesOf('Machine', module).add('Furnace', () => (
  <FurnaceMachine machineSelected={machineSelected} selectMachine={selectMachine} />
))
storiesOf('Machine', module).add('Seller', () => (
  <SellerMachine machineSelected={machineSelected} selectMachine={selectMachine} />
))
storiesOf('Machine', module).add('Starter', () => (
  <StarterMachine machineSelected={machineSelected} selectMachine={selectMachine} />
))
storiesOf('Machine', module).add('Transporter', () => (
  <TransporterMachine machineSelected={machineSelected} selectMachine={selectMachine} />
))
