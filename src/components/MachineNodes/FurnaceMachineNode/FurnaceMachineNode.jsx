import React from 'react'
import { Card, CardMedia } from '@material-ui/core'
import furnace from '../../../assets/furnace.png'
import { applyDirection, isPositionValid } from '../../../utils/directions'
import connector from './FurnaceMachineNodeConnector'

const FurnaceMachineNode = () => (
  <Card>
    <CardMedia component="img" image={furnace} />
  </Card>
)

const canMeltMaterial = material => material.type === 'metal'

class FurnaceMachineNodeStateful extends React.Component {
  componentWillUpdate(prevProps) {
    const { tick, node, deleteItems, createItems, dimensions } = this.props
    const { machine, position, items } = node
    const updatedTick = prevProps.tick

    if (updatedTick !== tick && tick % machine.frequency === 0) {
      const outputPosition = applyDirection(position, machine.direction)
      if (isPositionValid(outputPosition, dimensions)) {
        const itemsList = Object.values(items)
        const toDeleteItems = []
        const toCreateItems = []

        itemsList.forEach(item => {
          if (canMeltMaterial(item)) {
            const meltedMaterial = {
              ...item,
              name: `${item.name} Melted`,
              quantity: machine.frequency,
              price: item.price * 10,
              type: 'molten_metal',
            }
            toDeleteItems.push(item)
            toCreateItems.push(meltedMaterial)
          }
        })

        deleteItems(position, toDeleteItems)
        createItems(outputPosition, toCreateItems)
      }
    }
  }

  render() {
    return <FurnaceMachineNode {...this.props} />
  }
}

export default connector(FurnaceMachineNodeStateful)
