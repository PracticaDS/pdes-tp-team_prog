import React from 'react'
import starter from '../../../assets/machines/starter.png'
import starterActive from '../../../assets/machines/starter-active.png'
import MachineNode from './MachineNode'
import { applyDirection, isPositionValid } from '../../../utils/directions'
import { createRawMaterial } from '../../../actions/Grid'
import connector from './MachineNodeConnector'

const run = props => {
  const { node, dimensions } = props
  const { machine, position } = node
  const { direction, frequency, metadata } = machine
  const { selectedMaterial } = metadata
  const outputPosition = applyDirection(position, direction)
  const materials = [{ ...selectedMaterial, frequency }]
  let actions = []

  if (isPositionValid(outputPosition, dimensions)) {
    actions = materials.map(material =>
      createRawMaterial(outputPosition, {
        ...material,
        quantity: machine.frequency,
      }),
    )
  }
  return actions
}

const StarterMachineNode = props => (
  <MachineNode {...props} activeImg={starter} nonActiveImg={starterActive} run={run} />
)

export default connector(StarterMachineNode)
