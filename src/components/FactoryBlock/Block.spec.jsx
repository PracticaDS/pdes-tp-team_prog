import React from 'react'
import renderer from 'react-test-renderer'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import Block from './Block'

const state = {
  updateBlock: () => true,
  GameState: {
    machineSelected: 'bla',
  },
}
const mockStore = configureStore()
const store = mockStore(state)

it('render simple Block Component', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <Block position={{ row: 1, column: 1 }} node={{ type: 'Empty' }} />
    </Provider>,
  )
  expect(tree).toMatchSnapshot()
})
