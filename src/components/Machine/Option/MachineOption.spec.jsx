import React from 'react'
import { mount } from 'enzyme'
import MachineOption from './MachineOption'
// currency, selectMachine, machine, machineSelected
describe('MachineOption tests', () => {
  describe('Render the MachineOption Component with props machine(name, image) and a selected machine(name, image)', () => {
    const machineProp = {
      id: 1,
      name: 'machine',
      image: 'machine',
    }
    const MachineComponent = mount(<MachineOption machine={machineProp} />)

    it('Should match the machine prop', () => {
      expect(MachineComponent.prop('machine')).toBe(machineProp)
    })
  })
})
