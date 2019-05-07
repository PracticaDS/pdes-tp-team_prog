import React from 'react'
import { mount } from 'enzyme'
import EditionOption from './EditionOption'

describe('Detail Suite', () => {
  describe('Rendering Detail', () => {
    let editionOptionMock
    let onSelectActionMock
    let isOptionSelectedMock
    let editionOption

    beforeEach(() => {
      editionOptionMock = {
        title: Math.random().toString(),
        image: Math.random().toString(),
      }
      onSelectActionMock = jest.fn()

      const selectedOptions = [
        { value: false, expectedClass: 'editionOptionElement' },
        { value: true, expectedClass: 'editionOptionElementSelected' },
      ]
      isOptionSelectedMock = selectedOptions[Math.floor(Math.random() * selectedOptions.length)]

      editionOption = mount(
        <EditionOption
          editionOption={editionOptionMock}
          onSelectAction={onSelectActionMock}
          isOptionSelected={isOptionSelectedMock.value}
        />,
      )
    })

    it('Should have default props for every prop', () => {
      expect(editionOption).toBeDefined()
    })

    it('when option is selected, img has a proper class', () => {
      const editionOptionImg = editionOption.find('img')
      expect(editionOption).toBeDefined()
      expect(editionOptionImg.prop('className')).toEqual(isOptionSelectedMock.expectedClass)
    })

    it('when option is clicked, executes its onSelectAction fun', () => {
      expect(editionOption).toBeDefined()
      editionOption.simulate('click')
      expect(onSelectActionMock).toBeCalled()
      expect(onSelectActionMock).toBeCalledWith(editionOptionMock.title)
    })
  })
})
