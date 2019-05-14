import React from 'react'
import { mount } from 'enzyme'
import Detail from './Detail'
import { Constant } from './Detail.constants'

describe('Detail Suite', () => {
  describe('Rendering Detail', () => {
    it('Should have default props for every prop', () => {
      const detail = mount(<Detail />)

      expect(detail).toBeDefined()
      expect(detail.prop('cost')).toBeDefined()
      expect(detail.prop('name')).toBeDefined()
      expect(detail.prop('frequency')).toBeDefined()
      expect(detail.prop('cost')).toBe(0)
      expect(detail.prop('name')).toBe(Constant.noName)
      expect(detail.prop('frequency')).toBe(0)
    })

    it('Can render with props', () => {
      const freqRand = Math.random()
      const costRand = Math.random()
      const nameRand = Math.random().toString()
      const detail = mount(<Detail frequency={freqRand} cost={costRand} name={nameRand} />)

      expect(detail).toBeDefined()
      expect(detail.prop('cost')).toBeDefined()
      expect(detail.prop('name')).toBeDefined()
      expect(detail.prop('frequency')).toBeDefined()
      expect(detail.prop('cost')).toBe(costRand)
      expect(detail.prop('name')).toBe(nameRand)
      expect(detail.prop('frequency')).toBe(freqRand)
    })
  })
})
