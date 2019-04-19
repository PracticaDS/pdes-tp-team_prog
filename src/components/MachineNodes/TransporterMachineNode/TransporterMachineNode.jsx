import React from 'react'
import { Card, CardMedia } from '@material-ui/core'
import transporter from '../../../assets/transporter.png'

const TransporterMachineNode = () => (
  <Card>
    <CardMedia component="img" image={transporter} />
  </Card>
)

export default TransporterMachineNode
