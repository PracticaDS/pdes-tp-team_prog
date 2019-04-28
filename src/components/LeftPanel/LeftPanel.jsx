import React from 'react'

import './LeftPanel.css'
import MachineTypes from '../MachineTypes/MachineTypes'
import Edition from '../Edition/Edition'

// eslint-disable-next-line react/prop-types
const LeftPanel = ({ machineTypes, editionOptions }) => (
  <div className="mainLeftPanel">
    <MachineTypes elements={machineTypes} />
    <Edition elements={editionOptions} />
  </div>
)

export default LeftPanel
