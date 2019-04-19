import React from 'react'
import renderer from 'react-test-renderer'
import Block from './Block'

it('render simple Block Component', () => {
  const tree = renderer.create(<Block position={{ row: 1, column: 1 }} />)
  expect(tree).toMatchSnapshot()
})
