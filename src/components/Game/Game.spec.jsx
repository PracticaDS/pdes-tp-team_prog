import React from 'react'
import renderer from 'react-test-renderer'
import Game from './Game'

it('render simple Game Component', () => {
  const props = { restartCurrency: jest.fn(), startGame: jest.fn(), dimensions: { n: 6, m: 6 } }
  const tree = renderer.create(<Game {...props} />)
  expect(tree).toMatchSnapshot()
})
