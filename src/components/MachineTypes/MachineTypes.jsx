import React from 'react'
import { Card, CardContent, CardHeader } from '@material-ui/core'

import './MachineTypes.css'

import Constants from './MachineTypes.constants'
import Machine from '../Machine/Machine'

// eslint-disable-next-line react/prop-types
const MachineTypes = ({ elements }) => (
  <Card className="myMainContainer">
    <CardHeader className="Header" title={Constants.title} />
    <CardContent className="myContainer">
      {elements.map((machine, index) => (
        <Machine key={index} machine={machine} />
      ))}
    </CardContent>
  </Card>
)

export default MachineTypes
