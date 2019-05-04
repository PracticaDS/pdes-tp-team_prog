import React from 'react'
import { mount } from 'enzyme'
import MachineTypes from './MachineTypes'
import Machine from '../Machine/Machine'

describe('Machine Types tests', () => {
  describe('Render the Machine Types Component with a list of machines', () => {
    const machine = {
      id: 1,
      name: 'machine',
      image: 'machine',
    }
    const machines = [machine]
    const renderMachine = jest.fn(ma => <Machine machine={ma} />)
    const MachineTypesComponent = mount(
      <MachineTypes machines={machines} renderMachine={renderMachine} />,
    )

    it('Should match the machines prop', () => {
      expect(MachineTypesComponent.prop('machines')).toBe(machines)
    })

    it('should call the renderMachine function with every machine as argument', () => {
      machines.forEach(ma => {
        expect(renderMachine).toHaveBeenCalledWith(ma)
      })
    })
    it('should contain every machine component rendered', () => {
      machines.forEach(ma => {
        expect(MachineTypesComponent.containsMatchingElement(<Machine machine={ma} />)).toBeTruthy()
      })
    })
  })
})
