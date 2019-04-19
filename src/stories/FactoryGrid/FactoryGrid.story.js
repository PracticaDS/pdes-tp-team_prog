/* eslint-disable react/jsx-key */
/* eslint-disable react/jsx-filename-extension */
import React from 'react'
import { storiesOf } from '@storybook/react'
import FactoryGrid from '../../components/FactoryGrid/FactoryGrid'
import Block from '../../components/FactoryBlock/Block'
import CrafterMachineNode from '../../components/MachineNodes/CrafterMachineNode/CrafterMachineNode'
import FurnaceMachineNode from '../../components/MachineNodes/FurnaceMachineNode/FurnaceMachineNode'
import SellerMachineNode from '../../components/MachineNodes/SellerMachineNode/SellerMachineNode'
import TransporterMachineNode from '../../components/MachineNodes/TransporterMachineNode/TransporterMachineNode'

storiesOf('FactoryGrid', module)
  .add('Simple Grid with 1x2 empty blocks', () => {
    const rowBlock = [Block, Block]
    const blocks = [rowBlock]
    return <FactoryGrid componenets={blocks} />
  })
  .add('Simple Grid with 2x1 empty blocks', () => {
    const rowBlock = [Block]
    const blocks = [rowBlock, rowBlock]
    return <FactoryGrid componenets={blocks} />
  })
  .add('Simple Grid with 2x2 empty blocks', () => {
    const rowBlock = [Block, Block]
    const blocks = [rowBlock, rowBlock]
    return <FactoryGrid componenets={blocks} />
  })
  .add('Simple Grid with 5x4 empty blocks', () => {
    const rowBlock = [Block, Block, Block, Block]
    const blocks = [rowBlock, rowBlock, rowBlock, rowBlock, rowBlock]
    return <FactoryGrid componenets={blocks} />
  })
  .add('Grid with 5x4 and differents types of Machines', () => {
    const rowBlock = [Block, Block, Block, Block]
    const rowBlock1 = [
      Block,
      <Block Machine={CrafterMachineNode} />,
      Block,
      <Block Machine={SellerMachineNode} />,
    ]
    const rowBlock2 = [<Block Machine={FurnaceMachineNode} />, Block, Block, Block]
    const rowBlock3 = [
      <Block Machine={TransporterMachineNode} />,
      Block,
      <Block Machine={CrafterMachineNode} />,
      Block,
    ]
    const rowBlock4 = [
      Block,
      <Block Machine={SellerMachineNode} />,
      Block,
      <Block Machine={CrafterMachineNode} />,
    ]
    const blocks = [rowBlock1, rowBlock2, rowBlock3, rowBlock4, rowBlock]
    return <FactoryGrid componenets={blocks} />
  })
