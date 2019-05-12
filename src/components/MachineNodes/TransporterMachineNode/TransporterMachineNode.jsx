import React from 'react'
import { Card, CardMedia } from '@material-ui/core'
import transporter from '../../../assets/transporter.png'
import { applyDirection } from '../../../utils/directions'
import connector from './TransporterMachineNodeConnector'

const TransporterMachineNode = () => (
  <Card>
    <CardMedia component="img" image={transporter} />
  </Card>
)

class TransporterMachineNodeStateful extends React.Component {
  componentWillUpdate(prevProps) {
    const { tick, node, createItems, deleteItems } = this.props
    const updatedTick = prevProps.tick

    if (updatedTick !== tick && tick % node.machine.frequency === 0) {
      const func = () => {
        const newDirection = applyDirection(node.position, node.machine.direction)
        const items = node.items

        createItems(newDirection, Object.values(items))
        deleteItems(node.position, Object.values(items))
      }
      node.machine.process([], func)
    }
  }

  render() {
    return <TransporterMachineNode {...this.props} />
  }
}

export default connector(TransporterMachineNodeStateful)
