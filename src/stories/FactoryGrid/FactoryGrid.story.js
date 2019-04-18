/* eslint-disable react/jsx-filename-extension */
import React from 'react'
import { storiesOf } from '@storybook/react'
import FactoryGrid from '../../components/FactoryGrid/FactoryGrid'
import Block from '../../components/FactoryBlocks/Block/Block'

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
