import React from 'react'
import { Card, CardMedia } from '@material-ui/core'
import starter from '../../../assets/machines/starter.png'
import starterActive from '../../../assets/machines/starter-active.png'

const StarterMachineNode = ({ isActive }) => (
  <Card>
    <CardMedia component="img" image={isActive ? starterActive : starter} />
  </Card>
)
export default StarterMachineNode
