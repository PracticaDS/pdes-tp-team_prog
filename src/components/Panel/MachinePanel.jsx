import React from 'react'
import { Card, CardContent } from '@material-ui/core'
import Constants from './MachinePanel.constants'
import './MachinePanel.css'

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

const MachinePanel = () => (
  <div>
    <font className="machineTypesHeader">{Constants.title}</font>
    <Card className="machineTypesMainContainer">
      <CardContent className="machineTypesContainer">
        {machinesComponents.map((MachineComponent, index) => (
          <div key={index} className="machineTypesElement">
            <MachineComponent />
          </div>
        ))}
      </CardContent>
    </Card>
  </div>
)

export default MachinePanel
