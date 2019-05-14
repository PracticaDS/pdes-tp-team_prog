import React from 'react'
import { mount } from 'enzyme'
import FactoryGrid from './FactoryGrid'
import { generateEmptyGrid } from '../../utils/gridUtils'

describe('Factory GridSuite', () => {
  describe('Basic rendering', () => {
    let dimensionsMock = {}
    let renderBlockMock = null
    let customGrid = []
    let FactoryGridComponent = null

    beforeEach(() => {
      dimensionsMock = { n: 2, m: 2 }
      renderBlockMock = jest.fn()
      customGrid = generateEmptyGrid(2, 2)
      FactoryGridComponent = mount(
        <FactoryGrid dimensions={dimensionsMock} renderBlock={renderBlockMock} />,
      )
    })

    it('render simple Factory Block component', () => {
      expect(FactoryGridComponent).toBeDefined()
    })
    it('render block should be called with every row and column object', () => {
      customGrid.forEach((row, rowIndex) => {
        row.forEach((column, columnIndex) => {
          expect(renderBlockMock).toBeCalledWith({ row: rowIndex, column: columnIndex })
        })
      })
    })
  })
})
