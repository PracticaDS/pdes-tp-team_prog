import React from 'react'

import '../Machine.css'
import { crafterMachine as machine } from '../../Game/Game.constants'

const CrafterMachine = ({ selectMachine, machineSelected }) => (
  <div onClick={() => selectMachine(machine)}>
    <img
      className={machineSelected === machine ? 'machineSelected' : 'machineElement'}
      src={machine.image}
      alt="myImage"
    />
  </div>
)

export default CrafterMachine
