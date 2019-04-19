import React from 'react'
import { Card, CardMedia } from '@material-ui/core'
import starter from '../../../assets/starter.png'

const StarterMachineNode = () => (
  <Card>
    <CardMedia component="img" image={starter} />
  </Card>
)

export default StarterMachineNode
