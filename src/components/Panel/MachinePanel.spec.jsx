import React from 'react'
import { shallow } from 'enzyme'
import MachinePanel from './MachinePanel'
import TransporterMachine from '../Machine/Option/TransporterMachineOption'
import FurnaceMachine from '../Machine/Option/FurnaceMachineOption'
import CrafterMachine from '../Machine/Option/CrafterMachineOption'
import SellerMachine from '../Machine/Option/SellerMachineOption'
import StarterMachine from '../Machine/Option/StarterMachineOption'

describe('Machine Types tests', () => {
  describe('Render the Machine Types Component', () => {
    const machines = [
      StarterMachine,
      SellerMachine,
      CrafterMachine,
      FurnaceMachine,
      TransporterMachine,
    ]

    const machinePanel = shallow(<MachinePanel machines={machines} />)

    it('should contain every machine component rendered', () => {
      machines.forEach(Ma => {
        expect(machinePanel.containsMatchingElement(<Ma />)).toBeTruthy()
      })
    })
  })
})
