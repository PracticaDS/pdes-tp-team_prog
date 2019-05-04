import React from 'react'

import '../Machine.css'
import { transporterMachine } from '../../Game/Game.constants'

const TransporterMachine = ({ selectMachine, isSelected }) => (
  <div
    component_name={`machine_${transporterMachine.id}`}
    onClick={() => selectMachine(transporterMachine)}
  >
    <img
      className={isSelected ? 'machineSelected' : 'machineElement'}
      src={transporterMachine.image}
      alt="myImage"
    />
  </div>
)

export default TransporterMachine
