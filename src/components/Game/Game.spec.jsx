import React from 'react'
import renderer from 'react-test-renderer'
import Game from './Game'

it('render simple Game Component', () => {
  const props = { restartCurrency: () => 2, startGame: () => 1, dimensions: { n: 6, m: 6 } }
  const tree = renderer.create(<Game {...props} />)
  expect(tree).toMatchSnapshot()
})
