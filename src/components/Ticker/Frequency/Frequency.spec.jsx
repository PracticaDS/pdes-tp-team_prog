import React from 'react'
import { mount } from 'enzyme'
import Frequency from './Frequency'

describe('Detail Suite', () => {
  describe('Rendering Detail', () => {
    let tick
    let frequency

    beforeEach(() => {
      tick = jest.fn()
      frequency = mount(<Frequency tick={tick} />)
    })

    it('Should have default be defined', () => {
      expect(frequency).toBeDefined()
    })
    it('should have the tick prop', () => {
      expect(frequency.prop('tick')).toEqual(tick)
    })
  })
})
