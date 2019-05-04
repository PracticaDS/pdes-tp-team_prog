import React from 'react'
import { Card, CardContent } from '@material-ui/core'
import './MachineTypes.css'
import Constants from './MachineTypes.constants'

import StarterMachine from '../Machine/StarterMachine/StarterMachine'
import SellerMachine from '../Machine/SellerMachine/SellerMachine'
import CrafterMachine from '../Machine/CrafterMachine/CrafterMachine'
import FurnaceMachine from '../Machine/FurnaceMachine/FurnaceMachine'
import TransporterMachine from '../Machine/TransporterMachine/TransporterMachine'

const machinesComponents = [
  StarterMachine,
  SellerMachine,
  CrafterMachine,
  FurnaceMachine,
  TransporterMachine,
]

const MachineTypes = renderMachine => (
  <div>
    <font className="machineTypesHeader">{Constants.title}</font>
    <Card className="machineTypesMainContainer">
      <CardContent className="machineTypesContainer">
        {machinesComponents.map((MachineComponent, index) => (
          <div key={index} className="machineTypesElement">
            {renderMachine(MachineComponent)}
          </div>
        ))}
      </CardContent>
    </Card>
  </div>
)

export default MachineTypes
