import React from 'react'
import { Card, CardContent } from '@material-ui/core'
import Constants from './MachinePanel.constants'
import './MachinePanel.css'

const MachinePanel = ({ machines }) => (
  <div>
    <font className="machineTypesHeader">{Constants.title}</font>
    <Card className="machineTypesMainContainer">
      <CardContent className="machineTypesContainer">
        {machines.map((MachineComponent, index) => (
          <div className="machineTypesElement" key={index}>
            <MachineComponent />
          </div>
        ))}
      </CardContent>
    </Card>
  </div>
)

export default MachinePanel
