import React from 'react'
import renderer from 'react-test-renderer'
import configureStore from 'redux-mock-store'
import ResourcesBar from './ResourcesBar'

it('render simple ResourcesBar Component', () => {
  const state = {
    GameState: {
      currency: 1000,
    },
  }
  const mockStore = configureStore()
  const store = mockStore(state)
  const tree = renderer.create(<ResourcesBar store={store} />)
  expect(tree).toMatchSnapshot()
})
