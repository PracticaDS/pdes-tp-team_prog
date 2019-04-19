/* eslint-disable react/jsx-key */
/* eslint-disable react/jsx-filename-extension */
import React from 'react'
import { storiesOf } from '@storybook/react'
import FactoryGrid from '../../components/FactoryGrid/FactoryGrid'
import CrafterMachineNode from '../../components/MachineNodes/CrafterMachineNode/CrafterMachineNode'
import FurnaceMachineNode from '../../components/MachineNodes/FurnaceMachineNode/FurnaceMachineNode'
import SellerMachineNode from '../../components/MachineNodes/SellerMachineNode/SellerMachineNode'
import TransporterMachineNode from '../../components/MachineNodes/TransporterMachineNode/TransporterMachineNode'
import EmptyMachineNode from '../../components/MachineNodes/EmptyMachineNode/EmptyMachineNode'
import StarterMachineNode from '../../components/MachineNodes/StarterMachineNode/StarterMachineNode'

storiesOf('FactoryGrid', module)
  .add('Simple Grid with 1x2 empty blocks', () => {
    const rowBlock = [EmptyMachineNode, EmptyMachineNode]
    const blocks = [rowBlock]
    return <FactoryGrid componenets={blocks} />
  })
  .add('Simple Grid with 2x1 empty blocks', () => {
    const rowBlock = [EmptyMachineNode]
    const blocks = [rowBlock, rowBlock]
    return <FactoryGrid componenets={blocks} />
  })
  .add('Simple Grid with 2x2 empty blocks', () => {
    const rowBlock = [EmptyMachineNode, EmptyMachineNode]
    const blocks = [rowBlock, rowBlock]
    return <FactoryGrid componenets={blocks} />
  })
  .add('Simple Grid with 5x4 empty blocks', () => {
    const rowBlock = [EmptyMachineNode, EmptyMachineNode, EmptyMachineNode, EmptyMachineNode]
    const blocks = [rowBlock, rowBlock, rowBlock, rowBlock, rowBlock]
    return <FactoryGrid componenets={blocks} />
  })
  .add('Grid with 6x6 and differents types of Machines', () => {
    const rowBlock1 = [
      EmptyMachineNode,
      CrafterMachineNode,
      EmptyMachineNode,
      SellerMachineNode,
      EmptyMachineNode,
      CrafterMachineNode,
    ]
    const rowBlock2 = [
      FurnaceMachineNode,
      EmptyMachineNode,
      EmptyMachineNode,
      EmptyMachineNode,
      EmptyMachineNode,
      EmptyMachineNode,
    ]
    const rowBlock3 = [
      TransporterMachineNode,
      EmptyMachineNode,
      CrafterMachineNode,
      EmptyMachineNode,
      TransporterMachineNode,
      EmptyMachineNode,
    ]
    const rowBlock4 = [
      EmptyMachineNode,
      SellerMachineNode,
      EmptyMachineNode,
      CrafterMachineNode,
      FurnaceMachineNode,
      StarterMachineNode,
    ]
    const rowBlock5 = [
      FurnaceMachineNode,
      FurnaceMachineNode,
      EmptyMachineNode,
      EmptyMachineNode,
      EmptyMachineNode,
      CrafterMachineNode,
    ]
    const rowBlock6 = [
      TransporterMachineNode,
      EmptyMachineNode,
      CrafterMachineNode,
      StarterMachineNode,
      SellerMachineNode,
      EmptyMachineNode,
    ]
    const blocks = [rowBlock1, rowBlock2, rowBlock3, rowBlock4, rowBlock5, rowBlock6]
    return <FactoryGrid componenets={blocks} />
  })
