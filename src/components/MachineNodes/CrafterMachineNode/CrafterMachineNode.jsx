import React from 'react'
import { Card, CardMedia } from '@material-ui/core'
import crafter from '../../../assets/machines/crafter.png'
import crafterActive from '../../../assets/machines/crafter-active.png'

const CrafterMachineNode = ({ isActive }) => (
  <Card>
    <CardMedia component="img" image={isActive ? crafterActive : crafter} />
  </Card>
)

export default CrafterMachineNode
