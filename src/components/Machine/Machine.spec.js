import React from 'react'
import { mount } from 'enzyme'
import Machine from './Machine'

describe('Machine tests', () => {
  describe('Render the Machine Component with props machine(name, image) and a selected machine(name, image)', () => {
    const machineProp = {
      id: 1,
      name: 'machine',
      image: 'machine',
    }
    const isSelectedProp = false
    const selectMachineProp = jest.fn(() => null)
    const MachineComponent = mount(
      <Machine
        machine={machineProp}
        selectMachine={selectMachineProp}
        isSelected={isSelectedProp}
      />,
    )

    it('Should match the machine prop', () => {
      expect(MachineComponent.prop('machine')).toBe(machineProp)
    })

    describe('when the machine is clicked the select machine function is called with the machine passed as props', () => {
      it('Should render a Machine with the name attribute equals to the machine name', () => {
        MachineComponent.find('[component_name="machine_1"]').simulate('click')
        expect(selectMachineProp).toBeCalledWith(machineProp)
      })
    })
  })
})
