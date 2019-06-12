import React from 'react'
import { Card, CardMedia } from '@material-ui/core'
import seller from '../../../assets/machines/seller.png'
import sellerActive from '../../../assets/machines/seller-active.png'

const SellerMachineNode = ({ isActive }) => (
  <Card>
    <CardMedia component="img" image={isActive ? sellerActive : seller} />
  </Card>
)

export default SellerMachineNode
