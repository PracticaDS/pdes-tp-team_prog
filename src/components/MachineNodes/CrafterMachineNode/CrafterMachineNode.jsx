import React from 'react'
import { Card, CardMedia } from '@material-ui/core'
import crafter from '../../../assets/crafter.png'

const CrafterMachineNode = () => (
  <Card>
    <CardMedia component="img" image={crafter} />
  </Card>
)

export default CrafterMachineNode
