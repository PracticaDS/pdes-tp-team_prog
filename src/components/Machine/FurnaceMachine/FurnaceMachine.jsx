import React from 'react'

import '../Machine.css'
import { furnaceMachine as machine } from '../../Game/Game.constants'

const FurnaceMachine = ({ currency, selectMachine, machineTypeSelected }) => {
  const isDisabled = currency < machine.price
  const containerClassName = isDisabled ? 'machine-disabled' : ''
  return (
    <div
      component_name={`machine_${machine.id}`}
      className={containerClassName}
      onClick={() => !isDisabled && selectMachine({ ...machine })}
    >
      <img
        className={machineTypeSelected === machine.type ? 'machineSelected' : 'machineElement'}
        src={machine.image}
        alt="myImage"
      />
    </div>
  )
}

export default FurnaceMachine
