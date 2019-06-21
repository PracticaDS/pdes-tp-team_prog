import React from 'react'
import furnace from '../../../assets/machines/furnace.png'
import furnaceActive from '../../../assets/machines/furnace-active.png'
import MachineNode from './MachineNode'
import { applyDirection, isPositionValid } from '../../../utils/directions'
import { createItems, deleteItems } from '../../../actions/Grid'
import connector from './MachineNodeConnector'

const canMeltMaterial = material => material.type === 'metal'

const createMeltItem = item => ({
  ...item,
  name: `${item.name} Melted`,
  quantity: 1, // machine.frequency
  price: item.price * 10,
  type: 'molten_metal',
})

const run = props => {
  const { node, dimensions } = props
  const { machine, position, items } = node
  const { direction } = machine
  const outputPosition = applyDirection(position, direction)
  const values = Object.values(items)
  const actions = []

  if (isPositionValid(outputPosition, dimensions) && values.length > 0) {
    const toDeleteItems = values.filter(item => !canMeltMaterial(item))
    const toCreateItems = values.filter(canMeltMaterial).map(createMeltItem)

    const createItemsAction = createItems(outputPosition, toCreateItems)
    const deleteItemsAction = deleteItems(position, toDeleteItems)
    actions.push(createItemsAction)
    actions.push(deleteItemsAction)
  }
  return actions
}

const FurnaceMachineNode = props => (
  <MachineNode {...props} activeImg={furnaceActive} nonActiveImg={furnace} run={run} />
)

export default connector(FurnaceMachineNode)
