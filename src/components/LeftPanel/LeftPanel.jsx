import React from 'react'

import './LeftPanel.css'
import Edition from '../Edition/Edition'
import EditionOptionConnected from '../EditionOption/EditionOptionConnected'
import { editionOptions } from '../Game/option.constants'
import MachinePanel from '../Panel/MachinePanel'

const renderOption = edition => <EditionOptionConnected editionOption={edition} />
const LeftPanel = () => (
  <div className="mainLeftPanel">
    <MachinePanel />
    <Edition options={editionOptions} renderOption={renderOption} />
  </div>
)

export default LeftPanel
