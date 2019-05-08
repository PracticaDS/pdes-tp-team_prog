import React from 'react'

import '../Machine.css'
import { furnaceMachine as machine, areEquals } from '../../Game/Game.constants'

const FurnaceMachine = ({ selectMachine, machineSelected }) => (
  <div component_name={`machine_${machine.id}`} onClick={() => selectMachine(machine)}>
    <img
      className={areEquals(machineSelected, machine) ? 'machineSelected' : 'machineElement'}
      src={machine.image}
      alt="myImage"
    />
  </div>
)

export default FurnaceMachine