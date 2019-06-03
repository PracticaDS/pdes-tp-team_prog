import React from 'react'

import '../Machine.css'
import { transporterMachine as machine } from '../../Game/machine.constants'

const TransporterMachine = ({ machineTypeSelected, currency, selectMachine }) => {
  const isDisabled = currency < machine.price
  const containerClassName = isDisabled ? 'machine-disabled' : ''
  const imageClassName = machineTypeSelected === machine.type ? 'machineSelected' : 'machineElement'
  return (
    <div
      className={containerClassName}
      component_name={`machine_${machine.id}`}
      onClick={() => !isDisabled && selectMachine({ ...machine })}
    >
      <img className={imageClassName} src={machine.image} alt="myImage" />
    </div>
  )
}

export default TransporterMachine
