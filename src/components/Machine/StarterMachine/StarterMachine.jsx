import React from 'react'

import '../Machine.css'
import { starterMachine as machine } from '../../Game/Game.constants'

const StarterMachine = ({ selectMachine, machineSelected }) => (
  <div onClick={() => selectMachine(machine)}>
    <img
      className={machineSelected === machine ? 'machineSelected' : 'machineElement'}
      src={machine.image}
      alt="myImage"
    />
  </div>
)

export default StarterMachine
