import React from 'react'
import { mount } from 'enzyme'
import TransporterMachine from './TransporterMachine'

describe('CrafterMachine tests', () => {
  describe('Render the Machine Component with props machine(name, image) and a selected machine(name, image)', () => {
    const machineProp = {
      id: 1,
      name: 'machine',
      image: 'machine',
    }
    const machineTypeSelected = 'Type'
    const selectMachineProp = jest.fn(() => null)
    const MachineComponent = mount(
      <TransporterMachine
        machine={machineProp}
        selectMachine={selectMachineProp}
        machineTypeSelected={machineTypeSelected}
      />,
    )

    it('Should match the machine prop', () => {
      expect(MachineComponent.prop('machineTypeSelected')).toBe(machineTypeSelected)
      expect(MachineComponent.prop('selectMachine')).toBe(selectMachineProp)
    })
  })
})
