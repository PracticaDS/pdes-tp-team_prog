import React from 'react'
import { Card, CardMedia } from '@material-ui/core'
import transporter from '../../../assets/machines/transporter.png'
import transporterActive from '../../../assets/machines/transporter-active.png'

const TransporterMachineNode = ({ isActive }) => (
  <Card>
    <CardMedia component="img" image={isActive ? transporterActive : transporter} />
  </Card>
)

export default TransporterMachineNode
