/* eslint-disable react/jsx-filename-extension */
import React from 'react'
import { storiesOf } from '@storybook/react'
import TransporterMachineNode from '../../components/MachineNodes/TransporterMachineNode/TransporterMachineNode'

storiesOf('TransporterMachineNode', module).add('Empty TransporterMachineNode', () => (
  <div className="MachineStoryBook">
    <TransporterMachineNode />
  </div>
))
