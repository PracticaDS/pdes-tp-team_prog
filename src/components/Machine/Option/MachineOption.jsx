import React from 'react'
import Machine from '../Machine'
import '../Machine.css'

const MachineOption = ({ currency, selectMachine, machine, machineSelected }) => {
  const isDisabled = currency < machine.price
  const isSelected =
    machineSelected && machineSelected.type && machineSelected.type === machine.type
  return (
    <Machine
      currency={currency}
      isDisabled={isDisabled}
      isSelected={isSelected}
      onClick={() => selectMachine(machine)}
      nonActiveImg={machine.image}
    />
  )
}

export default MachineOption
