import React from 'react'

import './LeftPanel.css'
import MachineTypes from '../MachineTypes/MachineTypes'
import Edition from '../Edition/Edition'
import EditionOptionConnected from '../EditionOption/EditionOptionConnected'
import renderMachine from '../Machine/MachineConnector'
import { editionOptions } from '../Game/Game.constants'

const renderOption = edition => <EditionOptionConnected editionOption={edition} />
const LeftPanel = () => (
  <div className="mainLeftPanel">
    <MachineTypes renderMachine={renderMachine} />
    <Edition options={editionOptions} renderOption={renderOption} />
  </div>
)

export default LeftPanel
