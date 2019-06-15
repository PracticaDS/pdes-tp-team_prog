import React from 'react'
import connector from './MachineOptionConnector'
import MachineOption from './MachineOption'
import { furnaceMachine } from '../../Game/machine.constants'
import '../Machine.css'

const FurnaceMachine = props => <MachineOption {...props} machine={furnaceMachine} />

export default connector(FurnaceMachine)
