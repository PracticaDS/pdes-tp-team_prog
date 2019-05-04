import React from 'react'

import './LeftPanel.css'
import MachineTypes from '../MachineTypes/MachineTypes'
import Edition from '../Edition/Edition'
import MachineConnected from '../Machine/MachineConnected'
import EditionOptionConnected from '../EditionOption/EditionOptionConnected'

const renderMachine = machine => <MachineConnected machine={machine} />
const renderOption = edition => <EditionOptionConnected editionOption={edition} />

const LeftPanel = ({ machineTypes, editionOptions }) => (
  <div className="mainLeftPanel">
    <MachineTypes machines={machineTypes} renderMachine={renderMachine} />
    <Edition options={editionOptions} renderOption={renderOption} />
  </div>
)

export default LeftPanel
