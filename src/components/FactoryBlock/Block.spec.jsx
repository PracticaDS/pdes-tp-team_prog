import React from 'react'
import { mount } from 'enzyme'
import Block from './Block'

import { DOWN, LEFT, RIGHT, UP, getDegree } from '../../utils/directions'

describe('Block Suite', () => {
  describe('Basic rendering', () => {
    // let nodeMock
    // let positionMock
    // let displayActionMock
    // let directionToRotateMock
    // let isSelectedMock
    // let isEmptyBlockMock
    let renderNodeMock
    // let blockActionsMock

    beforeEach(() => {
      // editionOptionMock = {
      //   title: Math.random().toString(),
      //   image: Math.random().toString(),
      // }
      // onSelectActionMock = jest.fn()

      // const selectedOptions = [
      //   { value: false, expectedClass: 'editionOptionElement' },
      //   { value: true, expectedClass: 'editionOptionElementSelected' },
      // ]
      // isOptionSelectedMock = selectedOptions[Math.floor(Math.random() * selectedOptions.length)]

      // editionOption = mount(
      //   <EditionOption
      //     editionOption={editionOptionMock}
      //     onSelectAction={onSelectActionMock}
      //     isOptionSelected={isOptionSelectedMock.value}
      //   />,
      // )

      renderNodeMock = jest.fn()
    })

    it('render simple Block component', () => {
      const BlockComponent = mount(<Block renderNode={renderNodeMock} />)
      expect(BlockComponent).toBeDefined()
    })
  })
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
