import React from 'react'
import MachineOption from './MachineOption'
import { sellerMachine } from '../../Game/machine.constants'
import connector from './MachineOptionConnector'

const SellerMachineOption = props => <MachineOption {...props} machine={sellerMachine} />

export default connector(SellerMachineOption)
