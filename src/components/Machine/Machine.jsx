import React from 'react'
import connector from './MachineConnector'

import './Machine.css'

const Machine = ({ machine, selectMachine }) => (
  <div onClick={() => selectMachine(machine.title)}>
    <img className="machineElement" src={machine.image} alt="myImage" />
  </div>
)

export default connector(Machine)
