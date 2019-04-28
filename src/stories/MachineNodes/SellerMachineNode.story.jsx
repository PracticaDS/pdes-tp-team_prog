import React from 'react'
import { storiesOf } from '@storybook/react'
import SellerMachineNode from '../../components/MachineNodes/SellerMachineNode/SellerMachineNode'

storiesOf('SellerMachineNode', module).add('SellerMachineNode', () => (
  <div className="MachineStoryBook">
    <SellerMachineNode />
  </div>
))
