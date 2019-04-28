import React from 'react'
import { Card, CardContent } from '@material-ui/core'

import './MachineTypes.css'

import Constants from './MachineTypes.constants'
import Machine from '../Machine/Machine'

// eslint-disable-next-line react/prop-types
const MachineTypes = ({ elements }) => (
  <div>
    <font className="Header">{Constants.title}</font>
    <Card className="myMainContainer">
      <CardContent className="myContainer">
        {elements.map((machine, index) => (
          <Machine key={index} machine={machine} />
        ))}
      </CardContent>
    </Card>
  </div>
)

export default MachineTypes
