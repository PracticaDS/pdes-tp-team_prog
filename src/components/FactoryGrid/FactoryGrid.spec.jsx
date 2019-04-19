import React from 'react'
import renderer from 'react-test-renderer'
import FactoryGrid from './FactoryGrid'
import EmptyMachineNode from '../MachineNodes/EmptyMachineNode/EmptyMachineNode'

it('render simple Grid Component with 2x2 Blocks', () => {
  const rowBlock = [EmptyMachineNode, EmptyMachineNode]
  const blocks = [rowBlock, rowBlock]
  const tree = renderer.create(<FactoryGrid componenets={blocks} />)
  expect(tree).toMatchSnapshot()
})
