import React from 'react'
import { Card, CardContent } from '@material-ui/core'

import './MachineTypes.css'

import Constants from './MachineTypes.constants'
import MachineConnected from '../Machine/MachineConnected'

const MachineTypes = ({ elements }) => (
  <div>
    <font className="machineTypesHeader">{Constants.title}</font>
    <Card className="machineTypesMainContainer">
      <CardContent className="machineTypesContainer">
        {elements.map((machine, index) => (
          <div key={index} className="machineTypesElement">
            <MachineConnected machine={machine} />
          </div>
        ))}
      </CardContent>
    </Card>
  </div>
)

export default MachineTypes
