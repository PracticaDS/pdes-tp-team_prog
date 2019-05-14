import React from 'react'
import { mount } from 'enzyme'
import Clicker from './Clicker'

describe('Detail Suite', () => {
  describe('Rendering Detail', () => {
    let tick
    let clicker

    beforeEach(() => {
      tick = jest.fn()
      clicker = mount(<Clicker tick={tick} />)
    })

    it('should have be defined', () => {
      expect(clicker).toBeDefined()
    })

    it('should call tick when the button is clicked', () => {
      const button = clicker.find('[component_name="clicker"]').first()
      expect(button).toBeDefined()
      button.simulate('click')
      expect(tick).toBeCalled()
    })
  })
})
