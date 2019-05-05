import React from 'react'

import '../Machine.css'
import { transporterMachine as machine, areEquals } from '../../Game/Game.constants'

const TransporterMachine = ({ selectMachine, machineSelected }) => (
  <div component_name={`machine_${machine.id}`} onClick={() => selectMachine(machine)}>
    <img
      className={areEquals(machineSelected, machine) ? 'machineSelected' : 'machineElement'}
      src={machine.image}
      alt="myImage"
    />
  </div>
)

export default TransporterMachine
