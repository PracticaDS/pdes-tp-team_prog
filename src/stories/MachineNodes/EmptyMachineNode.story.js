/* eslint-disable react/jsx-filename-extension */
import React from 'react'
import { storiesOf } from '@storybook/react'
import EmptyMachineNode from '../../components/MachineNodes/EmptyMachineNode/EmptyMachineNode'

storiesOf('EmptyMachineNode', module).add('Empty EmptyMachineNode', () => (
  <div className="MachineStoryBook">
    <EmptyMachineNode />
  </div>
))
