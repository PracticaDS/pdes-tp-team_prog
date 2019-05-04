import React from 'react'

import './LeftPanel.css'
import MachineTypes from '../MachineTypes/MachineTypes'
import Edition from '../Edition/Edition'
import EditionOptionConnected from '../EditionOption/EditionOptionConnected'

const renderOption = edition => <EditionOptionConnected editionOption={edition} />
const LeftPanel = ({ editionOptions }) => (
  <div className="mainLeftPanel">
    <MachineTypes />
    <Edition options={editionOptions} renderOption={renderOption} />
  </div>
)

export default LeftPanel
