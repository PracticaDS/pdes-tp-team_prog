import React from 'react'

import '../Machine.css'
import { starterMachine } from '../../Game/Game.constants'

const StarterMachine = ({ selectMachine, isSelected }) => (
  <div
    component_name={`machine_${starterMachine.id}`}
    onClick={() => selectMachine(starterMachine)}
  >
    <img
      className={isSelected ? 'machineSelected' : 'machineElement'}
      src={starterMachine.image}
      alt="myImage"
    />
  </div>
)

export default StarterMachine
