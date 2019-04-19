import React from 'react'
import { Card, CardMedia } from '@material-ui/core'
import seller from '../../../assets/seller.png'

const SellerMachineNode = () => (
  <Card>
    <CardMedia component="img" image={seller} />
  </Card>
)

export default SellerMachineNode
