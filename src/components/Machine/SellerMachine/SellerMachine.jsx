import React from 'react'

import '../Machine.css'
import { sellerMachine as machine } from '../../Game/machine.constants'

const SellerMachine = ({ currency, selectMachine, machineTypeSelected }) => {
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

export default SellerMachine
