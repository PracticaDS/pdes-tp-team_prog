import React from 'react'
import { mount } from 'enzyme'
import Block from './Block'

import { DOWN, LEFT, RIGHT, UP, getDegree } from '../../utils/directions'

describe('Block Suite', () => {
  describe('Basic rendering', () => {
    let renderNodeMock
    let node

    beforeEach(() => {
      renderNodeMock = jest.fn()
      node = {
        position: {
          row: 0,
          column: 0,
        },
      }
    })

    it('render simple Block component', () => {
      const BlockComponent = mount(<Block node={node} renderNode={renderNodeMock} />)
      expect(BlockComponent).toBeDefined()
    })
  })
})

it('when calling getDegree with direction Left then returns css object with transform 90 degree', () => {
  const cssDown = getDegree(LEFT)
  expect(cssDown).toEqual('left')
})

it('when calling getDegree with direction Right then returns css object with transform 270 degree', () => {
  const cssDown = getDegree(RIGHT)
  expect(cssDown).toEqual('right')
})

it('when calling getDegree with direction Up then returns css object with transform 180 degree', () => {
  const cssDown = getDegree(UP)
  expect(cssDown).toEqual('up')
})

it('when calling getDegree with direction Down then returns css object with transform 0 degree', () => {
  const cssDown = getDegree(DOWN)
  expect(cssDown).toEqual('down')
})
