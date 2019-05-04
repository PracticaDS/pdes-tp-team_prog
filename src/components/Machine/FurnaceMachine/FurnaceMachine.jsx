import React from 'react'

import '../Machine.css'
import { furnaceMachine as machine } from '../../Game/Game.constants'

const FurnaceMachine = ({ selectMachine, machineSelected }) => (
  <div onClick={() => selectMachine(machine)}>
    <img
      className={machineSelected === machine ? 'machineSelected' : 'machineElement'}
      src={machine.image}
      alt="myImage"
    />
  </div>
)

export default FurnaceMachine
