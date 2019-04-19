/* eslint-disable react/jsx-filename-extension */
import React from 'react'
import { storiesOf } from '@storybook/react'
import CrafterMachineNode from '../../components/MachineNodes/CrafterMachineNode/CrafterMachineNode'
import './MachineStoryBook.css'

storiesOf('CrafterMachineNode', module).add('CrafterMachineNode', () => (
  <div className="MachineStoryBook">
    <CrafterMachineNode />
  </div>
))
