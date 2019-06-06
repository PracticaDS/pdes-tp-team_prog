import React from 'react'
import { Card, CardMedia } from '@material-ui/core'
import furnace from '../../../assets/machines/furnace.png'
import furnaceActive from '../../../assets/machines/furnace-active.png'

const FurnaceMachineNode = ({ isActive }) => (
  <Card>
    <CardMedia component="img" image={isActive ? furnaceActive : furnace} />
  </Card>
)

export default FurnaceMachineNode
