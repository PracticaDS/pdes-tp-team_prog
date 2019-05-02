import React from 'react'
import renderer from 'react-test-renderer'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import Block from './Block'

import { DOWN, LEFT, RIGHT, UP, getDegree } from '../../utils/directions'

const state = {
  updateBlock: () => true,
  Grid: {
    gridValues: Array(2).fill(Array(2).fill({ machine: { type: 'Crafter' } })),
  },
  GameState: {
    machineSelected: 'bla',
  },
}
const mockStore = configureStore()
const store = mockStore(state)

it('render simple Block component', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <Block position={{ row: 1, column: 1 }} />
    </Provider>,
  )
  expect(tree).toMatchSnapshot()
})

it('when calling getDegree with direction Left then returns css object with transform 90 degree', () => {
  const cssDown = getDegree(LEFT)
  expect(cssDown).toEqual({ transform: 'rotate(90deg)' })
})

it('when calling getDegree with direction Right then returns css object with transform 270 degree', () => {
  const cssDown = getDegree(RIGHT)
  expect(cssDown).toEqual({ transform: 'rotate(270deg)' })
})

it('when calling getDegree with direction Up then returns css object with transform 180 degree', () => {
  const cssDown = getDegree(UP)
  expect(cssDown).toEqual({ transform: 'rotate(180deg)' })
})

it('when calling getDegree with direction Down then returns css object with transform 0 degree', () => {
  const cssDown = getDegree(DOWN)
  expect(cssDown).toEqual({ transform: 'rotate(0deg)' })
})
