import React from 'react'
import { Card, CardMedia } from '@material-ui/core'
import starter from '../../../assets/starter.png'
import connector from './StarterMachineNodeConnector'
import { applyDirection, isPositionValid } from '../../../utils/directions'
import '../../FactoryGrid/FactoryGrid.css'

const StarterMachineNode = () => (
  <Card className="MachineImg">
    <CardMedia component="img" image={starter} />
  </Card>
)

class StarterMachineNodeStateful extends React.Component {
  componentWillUpdate(prevProps) {
    const { tick, node, createRawMaterial, dimensions } = this.props
    const updatedTick = prevProps.tick

    if (updatedTick !== tick && tick % node.machine.frequency === 0) {
      const func = (dir, input, output) => {
        const outputPosition = applyDirection(node.position, node.machine.direction)

        if (isPositionValid(outputPosition, dimensions)) {
          output.forEach(item => {
            createRawMaterial(outputPosition, { ...item, quantity: node.machine.frequency })
          })
        }
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
