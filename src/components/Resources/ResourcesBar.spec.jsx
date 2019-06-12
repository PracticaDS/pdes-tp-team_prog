import React from 'react'
import { mount } from 'enzyme'
import ResourcesBar from './ResourcesBar'

describe('Resources Bar Suite', () => {
  describe('Rendering Resources Bar', () => {
    const User = {
      username: 'O.O',
    }

    it('Resource bar property 1 - its set currency is always shown', () => {
      const Currency = Math.random()
      const MachineComponent = mount(<ResourcesBar currency={Currency} user={User} />)

      expect(MachineComponent.prop('currency')).toBeDefined()
      expect(MachineComponent.prop('currency')).toEqual(Currency)
    })

    it('Resource bar property 2 - if currency is not set, then prop is undefined', () => {
      const MachineComponent = mount(<ResourcesBar user={User} />)
      expect(MachineComponent.prop('currency')).not.toBeDefined()
      expect(MachineComponent.find('.CountFont').text()).toEqual('$undefined')
    })
  })
})
