import React from 'react'
import connector from './MachineConnector'

import './Machine.css'

const Machine = ({ machine, selectMachine, machineSelected }) => (
  <div data-cy={`machine-type-${machine.name}`} onClick={() => selectMachine(machine)}>
    <img
      className={machineSelected === machine ? 'machineSelected' : 'machineElement'}
      src={machine.image}
      alt="myImage"
    />
  </div>
)

export default connector(Machine)
