import React from 'react'
import { storiesOf } from '@storybook/react'
import StarterMachineNode from '../../components/MachineNodes/StarterMachineNode/StarterMachineNode'

storiesOf('StarterMachineNode', module).add('StarterMachineNode', () => (
  <div className="MachineStoryBook">
    <StarterMachineNode />
  </div>
))
