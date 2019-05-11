import React from 'react'

import '../Machine.css'
import { sellerMachine as machine } from '../../Game/Game.constants'

const SellerMachine = ({ selectMachine, machineTypeSelected }) => (
  <div component_name={`machine_${machine.id}`} onClick={() => selectMachine({ ...machine })}>
    <img
      className={machineTypeSelected === machine.type ? 'machineSelected' : 'machineElement'}
      src={machine.image}
      alt="myImage"
    />
  </div>
)

export default SellerMachine
