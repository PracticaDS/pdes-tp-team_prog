import React from 'react'
import { mount } from 'enzyme'
import MachineTypes from './MachineTypes'
import TransporterMachine from '../Machine/TransporterMachine/TransporterMachine'
import FurnaceMachine from '../Machine/FurnaceMachine/FurnaceMachine'
import CrafterMachine from '../Machine/CrafterMachine/CrafterMachine'
import SellerMachine from '../Machine/SellerMachine/SellerMachine'
import StarterMachine from '../Machine/StarterMachine/StarterMachine'

describe('Machine Types tests', () => {
  describe('Render the Machine Types Component', () => {
    const machines = [
      StarterMachine,
      SellerMachine,
      CrafterMachine,
      FurnaceMachine,
      TransporterMachine,
    ]
    const renderMachine = jest.fn(Machine => Machine)

    const props = {
      renderMachine,
    }

    const MachineTypesComponent = mount(<MachineTypes {...props} />)

    it('should call the renderMachine function with every machine as argument', () => {
      machines.forEach(Ma => {
        expect(renderMachine).toHaveBeenCalledWith(Ma)
      })
    })
    it('should contain every machine component rendered', () => {
      machines.forEach(Ma => {
        expect(MachineTypesComponent.containsMatchingElement(<Ma />)).toBeTruthy()
      })
    })
  })
})
