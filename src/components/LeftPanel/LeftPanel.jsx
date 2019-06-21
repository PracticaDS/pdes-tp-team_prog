import React from 'react'

import './LeftPanel.css'
import Edition from '../Edition/Edition'
import EditionOptionConnected from '../EditionOption/EditionOptionConnected'
import { editionOptions } from '../Game/option.constants'
import MachinePanel from '../Panel/MachinePanel'
import StarterMachineOption from '../Machine/Option/StarterMachineOption'
import SellerMachineOption from '../Machine/Option/SellerMachineOption'
import CrafterMachineOption from '../Machine/Option/CrafterMachineOption'
import FurnaceMachineOption from '../Machine/Option/FurnaceMachineOption'
import TransporterMachineOption from '../Machine/Option/TransporterMachineOption'

const machinesComponents = [
  StarterMachineOption,
  SellerMachineOption,
  CrafterMachineOption,
  FurnaceMachineOption,
  TransporterMachineOption,
]

const renderOption = edition => <EditionOptionConnected editionOption={edition} />
const LeftPanel = () => (
  <div className="mainLeftPanel">
    <MachinePanel machines={machinesComponents} />
    <Edition options={editionOptions} renderOption={renderOption} />
  </div>
)

export default LeftPanel
