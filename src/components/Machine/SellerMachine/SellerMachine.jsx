import React from 'react'

import '../Machine.css'
import { sellerMachine as machine } from '../../Game/Game.constants'

const SellerMachine = ({ selectMachine, machineSelected }) => (
  <div onClick={() => selectMachine(machine)}>
    <img
      className={machineSelected === machine ? 'machineSelected' : 'machineElement'}
      src={machine.image}
      alt="myImage"
    />
  </div>
)

export default SellerMachine
