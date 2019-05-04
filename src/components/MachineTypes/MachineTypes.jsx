import React from 'react'
import { Card, CardContent } from '@material-ui/core'
import './MachineTypes.css'
import Constants from './MachineTypes.constants'

const MachineTypes = ({ machines = [], renderMachine }) => (
  <div>
    <font className="machineTypesHeader">{Constants.title}</font>
    <Card className="machineTypesMainContainer">
      <CardContent className="machineTypesContainer">
        {machines.map((machine, index) => (
          <div key={index} className="machineTypesElement">
            {renderMachine(machine)}
          </div>
        ))}
      </CardContent>
    </Card>
  </div>
)

export default MachineTypes
