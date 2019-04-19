/* eslint-disable react/jsx-filename-extension */
import React from 'react'
import { storiesOf } from '@storybook/react'
import Block from '../../components/FactoryBlock/Block'
import CrafterMachineNode from '../../components/MachineNodes/CrafterMachineNode/CrafterMachineNode'

storiesOf('FactoryBlock', module)
  .add('Simple EmptyBlock', () => <Block position={{ row: 1, column: 1 }} />)
  .add('With a MachineNode', () => (
    <Block position={{ row: 1, column: 1 }} MachineNode={CrafterMachineNode} />
  ))
