import React from 'react'
import transporter from '../../../assets/machines/transporter.png'
import transporterActive from '../../../assets/machines/transporter-active.png'
import MachineNode from './MachineNode'
import { applyDirection, isPositionValid } from '../../../utils/directions'
import { createItems, deleteItems } from '../../../actions/Grid'
import connector from './MachineNodeConnector'

const run = props => {
  const { node, dimensions } = props
  const { machine, position, items } = node
  const { direction } = machine
  const outputPosition = applyDirection(position, direction)
  const values = Object.values(items)
  const actions = []

  if (isPositionValid(outputPosition, dimensions) && values.length > 0) {
    const createItemsAction = createItems(outputPosition, values)
    const deleteItemsAction = deleteItems(position, values)
    actions.push(createItemsAction)
    actions.push(deleteItemsAction)
  }
  return actions
}

const TransporterMachineNode = props => (
  <MachineNode {...props} activeImg={transporter} nonActiveImg={transporterActive} run={run} />
)

export default connector(TransporterMachineNode)
