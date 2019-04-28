import React from 'react'
import renderer from 'react-test-renderer'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import Block from './Block'

const state = {
  updateBlock: () => true,
  Grid: {
    gridValues: Array(2).fill(Array(2).fill({ type: 'Crafter' })),
  },
  GameState: {
    machineSelected: 'bla',
  },
}
const mockStore = configureStore()
const store = mockStore(state)

it('render simple Block Component', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <Block position={{ row: 1, column: 1 }} />
    </Provider>,
  )
  expect(tree).toMatchSnapshot()
})
