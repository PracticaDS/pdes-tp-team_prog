import React from 'react'
import { Card, CardMedia } from '@material-ui/core'
import furnace from '../../../assets/furnace.png'

const FurnaceMachineNode = () => (
  <Card>
    <CardMedia component="img" image={furnace} />
  </Card>
)

export default FurnaceMachineNode
