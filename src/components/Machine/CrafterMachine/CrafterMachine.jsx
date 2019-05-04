import React from 'react'

import '../Machine.css'
import { crafterMachine } from '../../Game/Game.constants'

const CrafterMachine = ({ selectMachine, isSelected }) => (
  <div
    component_name={`machine_${crafterMachine.id}`}
    onClick={() => selectMachine(crafterMachine)}
  >
    <img
      className={isSelected ? 'machineSelected' : 'machineElement'}
      src={crafterMachine.image}
      alt="myImage"
    />
  </div>
)

export default CrafterMachine
