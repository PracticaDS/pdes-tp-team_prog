import React from 'react'
import renderer from 'react-test-renderer'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import FactoryGrid from './FactoryGrid'

const state = {
  Grid: {
    gridValues: Array(2).fill(Array(2).fill({ machine: { type: 'Crafter' } })),
    dimensions: { n: 2, m: 2 },
  },
  GameState: {
    machineSelected: 'bla',
  },
}
const mockStore = configureStore()
const store = mockStore(state)

it('render simple Grid Component with 2x2 Blocks', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <FactoryGrid />
    </Provider>,
  )
  expect(tree).toMatchSnapshot()
})
