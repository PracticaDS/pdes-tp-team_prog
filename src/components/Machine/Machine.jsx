import React from 'react'
import connector from './MachineConnector'

import './Machine.css'

// eslint-disable-next-line react/prop-types
const Machine = ({ machine, selectMachine }) => (
  <div onClick={() => selectMachine(machine)}>
    <img className="machineElement" src={machine.image} alt="myImage" />
  </div>
)

export default connector(Machine)
