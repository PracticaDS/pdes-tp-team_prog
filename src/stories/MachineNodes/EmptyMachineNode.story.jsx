import React from 'react'
import { storiesOf } from '@storybook/react'
import EmptyMachineNode from '../../components/MachineNodes/EmptyMachineNode/EmptyMachineNode'

storiesOf('EmptyMachineNode', module).add('EmptyMachineNode', () => (
  <div className="MachineStoryBook">
    <EmptyMachineNode />
  </div>
))