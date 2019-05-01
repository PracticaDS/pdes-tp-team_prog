import React from 'react'
import { Card, CardMedia } from '@material-ui/core'
import starter from '../../../assets/starter.png'
import connector from './StarterMachineNodeConnector'
import { applyDirection } from '../../../utils/directions'

const StarterMachineNode = () => (
  <Card>
    <CardMedia component="img" image={starter} />
  </Card>
)

/*
node: {
  position
  machine: {
    frequency
    direction
    material
    process
  }
  items
*/

class StarterMachineNodeStateful extends React.Component {
  componentWillUpdate(prevProps) {
    const { tick, node, createRawMaterial } = this.props
    const updatedTick = prevProps.tick

    if (updatedTick !== tick && tick % node.machine.frequency === 0) {
      const func = (dir, input, output) => {
        const newDirection = applyDirection(node.position, node.machine.direction)

        output.forEach(item => {
          createRawMaterial(newDirection, { ...item, quantity: node.machine.frequency })
        })
      }

      node.machine.process(node.items, func)
    }
  }

  render() {
    return <StarterMachineNode {...this.props} />
  }
}

// StarterMachineNodeStateful.defaultProps = {
//   direction: 'SOUTH',
//   materialType: 'gold',
//   frequency: 2,
// }

export default connector(StarterMachineNodeStateful)
