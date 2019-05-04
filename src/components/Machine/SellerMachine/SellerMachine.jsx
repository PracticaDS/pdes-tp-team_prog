import React from 'react'

import '../Machine.css'
import { sellerMachine } from '../../Game/Game.constants'

const SellerMachine = ({ selectMachine, isSelected }) => (
  <div component_name={`machine_${sellerMachine.id}`} onClick={() => selectMachine(sellerMachine)}>
    <img
      className={isSelected ? 'machineSelected' : 'machineElement'}
      src={sellerMachine.image}
      alt="myImage"
    />
  </div>
)

export default SellerMachine
