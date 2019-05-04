import React from 'react'

import '../Machine.css'
import { furnaceMachine } from '../../Game/Game.constants'

const FurnaceMachine = ({ selectMachine, isSelected }) => (
  <div
    component_name={`machine_${furnaceMachine.id}`}
    onClick={() => selectMachine(furnaceMachine)}
  >
    <img
      className={isSelected ? 'machineSelected' : 'machineElement'}
      src={furnaceMachine.image}
      alt="myImage"
    />
  </div>
)

export default FurnaceMachine
