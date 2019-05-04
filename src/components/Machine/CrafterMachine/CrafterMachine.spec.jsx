import React from 'react'
import { mount } from 'enzyme'
import CrafterMachine from './CrafterMachine'

describe('CrafterMachine tests', () => {
  describe('Render the Machine Component with props machine(name, image) and a selected machine(name, image)', () => {
    const machineProp = {
      id: 1,
      name: 'machine',
      image: 'machine',
    }
    const machineSelected = {}
    const selectMachineProp = jest.fn(() => null)
    const MachineComponent = mount(
      <CrafterMachine
        machine={machineProp}
        selectMachine={selectMachineProp}
        machineSelected={machineSelected}
      />,
    )

    it('Should match the machine prop', () => {
      expect(MachineComponent.prop('machineSelected')).toBe(machineSelected)
      expect(MachineComponent.prop('selectMachine')).toBe(selectMachineProp)
    })
  })
})
