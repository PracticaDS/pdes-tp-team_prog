import React from 'react'
import { mount } from 'enzyme'
import Edition from './Edition'
import EditionOption from '../EditionOption/EditionOption'
import { SELECTION } from '../../utils/editionUtils'

describe('Edition tests', () => {
  describe('Render the Edition Component with a list of editionOptions', () => {
    const editionOption = {
      title: SELECTION,
      image: 'none',
    }
    const options = [editionOption]
    const renderOption = jest.fn(eo => <EditionOption editionOption={eo} />)
    const EditionComponent = mount(<Edition options={options} renderOption={renderOption} />)

    it('Should match the options prop', () => {
      expect(EditionComponent.prop('options')).toBe(options)
    })

    it('should call the renderOption function with every option as argument', () => {
      options.forEach(eo => {
        expect(renderOption).toHaveBeenCalledWith(eo)
      })
    })
    it('should contain every edition option component rendered', () => {
      options.forEach(eo => {
        expect(
          EditionComponent.containsMatchingElement(<EditionOption editionOption={eo} />),
        ).toBeTruthy()
      })
    })
  })
})
