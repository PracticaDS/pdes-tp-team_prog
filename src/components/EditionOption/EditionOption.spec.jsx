import React from 'react'
import { mount } from 'enzyme'
import EditionOption from './EditionOption'

describe('Detail Suite', () => {
  describe('Rendering Detail', () => {
    it('Should have default props for every prop', () => {
      const editionOptionMock = {
        title: Math.random().toString(),
        image: Math.random().toString(),
      }

      const onSelectActionMock = jest.fn()

      const booleanOptions = [true, false]
      const isOptionSelectedMock = booleanOptions[Math.floor(Math.random() * booleanOptions.length)]

      const editionOption = mount(
        <EditionOption
          editionOption={editionOptionMock}
          onSelectAction={onSelectActionMock}
          isOptionSelected={isOptionSelectedMock}
        />,
      )

      expect(editionOption).toBeDefined()
    })
  })
})
