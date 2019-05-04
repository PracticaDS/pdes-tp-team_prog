import React from 'react'

import './LeftPanel.css'
import MachineTypes from '../MachineTypes/MachineTypes'
import Edition from '../Edition/Edition'
import MachineConnected from '../Machine/MachineConnected'

const renderMachine = machine => <MachineConnected machine={machine} />

const LeftPanel = ({ machineTypes, editionOptions }) => (
  <div className="mainLeftPanel">
    <MachineTypes machines={machineTypes} renderMachine={renderMachine} />
    <Edition elements={editionOptions} />
  </div>
)

export default LeftPanel
