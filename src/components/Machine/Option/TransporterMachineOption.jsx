import React from 'react'
import MachineOption from './MachineOption'
import { transporterMachine } from '../../Game/machine.constants'
import connector from './MachineOptionConnector'

const TransporterMachineOption = props => <MachineOption {...props} machine={transporterMachine} />

export default connector(TransporterMachineOption)
