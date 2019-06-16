import React from 'react'
import MachineNode from './MachineNode'
import crafter from '../../../assets/machines/crafter.png'
import crafterActive from '../../../assets/machines/crafter-active.png'
import { applyDirection, isPositionValid } from '../../../utils/directions'
import { getCraftedMaterial, getItemsFromMaterials, hasNecessaryMaterials } from '../utils'
import { createRawMaterial, deleteItems } from '../../../actions/Grid'
import connector from './MachineNodeConnector'

const run = props => {
  const { node, dimensions } = props
  const { machine, position, items } = node
  const { direction } = machine
  const outputPosition = applyDirection(position, direction)
  const actions = []
  if (isPositionValid(outputPosition, dimensions)) {
    if (hasNecessaryMaterials(machine, items)) {
      const toDeleteItems = getItemsFromMaterials(machine, items)
      const { material, quantity } = getCraftedMaterial(machine)
      const deleteItemsAction = deleteItems(position, toDeleteItems)
      const createMaterialAction = createRawMaterial(outputPosition, { ...material, quantity })

      actions.push(deleteItemsAction)
      actions.push(createMaterialAction)
    }
  }
  return actions
}

const StarterMachineNode = props => (
  <MachineNode {...props} activeImg={crafterActive} nonActiveImg={crafter} run={run} />
)

export default connector(StarterMachineNode)
