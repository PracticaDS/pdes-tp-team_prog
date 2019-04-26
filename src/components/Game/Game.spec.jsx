import React from 'react'
import renderer from 'react-test-renderer'
import configureStore from 'redux-mock-store'
import Game from './Game'

it('render simple Game Component', () => {
  const state = {
    restartCurrency: jest.fn(),
    startGame: jest.fn(),
    tick: jest.fn(),
    Grid: { dimensions: { n: 6, m: 6 } },
  }
  const mockStore = configureStore()
  const store = mockStore(state)
  const tree = renderer.create(<Game store={store} />)
  expect(tree).toMatchSnapshot()
})
