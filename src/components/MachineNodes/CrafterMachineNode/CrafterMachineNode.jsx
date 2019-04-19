import React from 'react'
import { Card, CardMedia } from '@material-ui/core'
import crafter from '../../../assets/crafter.png'
import '../../../stories/MachineNodes/MachineStoryBook.css'

const CrafterMachineNode = () => (
  <Card>
    <CardMedia component="img" image={crafter} />
  </Card>
)

export default CrafterMachineNode
