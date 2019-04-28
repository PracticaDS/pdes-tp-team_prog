import React from 'react'
import { storiesOf } from '@storybook/react'
import FurnaceMachineNode from '../../components/MachineNodes/FurnaceMachineNode/FurnaceMachineNode'

storiesOf('FurnaceMachineNode', module).add('FurnaceMachineNode', () => (
  <div className="MachineStoryBook">
    <FurnaceMachineNode />
  </div>
))
