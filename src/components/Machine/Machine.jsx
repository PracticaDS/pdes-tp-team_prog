import React from 'react'
import './Machine.css'

const Machine = ({ machine, selectMachine, isSelected }) => (
  <div component_name={`machine_${machine.id}`} onClick={() => selectMachine(machine)}>
    <img
      className={isSelected ? 'machineSelected' : 'machineElement'}
      src={machine.image}
      alt="myImage"
    />
  </div>
)

export default Machine
