/* eslint-disable react/jsx-filename-extension */
import React from 'react'
import { storiesOf } from '@storybook/react'
import FactoryGrid from '../../components/FactoryGrid/FactoryGrid'
import EmptyFactoryBlock from '../../components/FactoryBlocks/EmptyFactoryBlock/EmptyFactoryBlock'

storiesOf('FactoryGrid', module)
  .add('Simple Grid without blocks', () => <FactoryGrid componenets={[[]]} />)
  .add('Simple Grid with 2x2 empty blocks', () => {
    const twoBlocks = [EmptyFactoryBlock, EmptyFactoryBlock]
    const blocks = [twoBlocks, twoBlocks]
    return <FactoryGrid componenets={blocks} />
  })
