/* eslint-disable react/jsx-filename-extension */
import React from 'react'
import { storiesOf } from '@storybook/react'
import SellerMachineNode from '../../components/MachineNodes/SellerMachineNode/SellerMachineNode'

storiesOf('SellerMachineNode', module).add('Empty SellerMachineNode', () => (
  <div className="MachineStoryBook">
    <SellerMachineNode />
  </div>
))
