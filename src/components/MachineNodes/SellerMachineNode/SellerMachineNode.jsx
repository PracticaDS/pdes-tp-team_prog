import React from 'react'
import { Card, CardMedia } from '@material-ui/core'
import connector from './SellerMachineNodeConnector'
import seller from '../../../assets/seller.png'

const SellerMachineNode = () => (
  <Card>
    <CardMedia component="img" image={seller} />
  </Card>
)

class SellerMachineNodeStateful extends React.Component {
  componentWillUpdate(prevProps) {
    const { tick, node, deleteItems, incrementCurrency } = this.props
    const updatedTick = prevProps.tick

    if (updatedTick !== tick && tick % node.machine.frequency === 0) {
      const addedCurrency = Object.keys(node.items).reduce(
        (Acc, Key) => Acc + node.items[Key].price * node.items[Key].quantity,
        0,
      )
      deleteItems(node.position, Object.values(node.items))
      incrementCurrency(addedCurrency)
    }
  }

  render() {
    return <SellerMachineNode {...this.props} />
  }
}

export default connector(SellerMachineNodeStateful)
