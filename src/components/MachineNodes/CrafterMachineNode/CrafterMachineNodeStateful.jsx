import React from 'react'
import { applyDirection } from '../../../utils/directions'
import {
  activateNode,
  deactivate,
  getCraftedMaterial,
  getItemsFromMaterials,
  hasNecessaryMaterials,
  incrementCount,
  isFrequencyFinished,
  runCBInValidPosition,
} from '../utils'
import CrafterMachineNode from './CrafterMachineNode'

class CrafterMachineNodeStateful extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      personalCount: 0,
      isActive: false,
    }
  }

  componentWillReceiveProps({ tick: nextTick }) {
    const { tick } = this.props
    if (nextTick !== tick) {
      if (isFrequencyFinished(this.props, this.state)) {
        const { node, dimensions, deleteItems, createRawMaterial } = this.props
        const { machine, position, items } = node
        const { direction } = machine
        const outputPosition = applyDirection(position, direction)
        const cb = () => {
          if (!hasNecessaryMaterials(machine, items)) return
          this.setState(activateNode, () => {
            const toDeleteItems = getItemsFromMaterials(machine, items)
            const { material, quantity } = getCraftedMaterial(machine)

            deleteItems(position, toDeleteItems)
            createRawMaterial(outputPosition, { ...material, quantity })
          })
        }
        runCBInValidPosition(outputPosition, dimensions, cb)
      } else {
        this.setState(incrementCount)
        this.setState(deactivate)
      }
    }
  }

  render() {
    const { isActive } = this.state
    const { isUpdating } = this.props
    return <CrafterMachineNode isActive={isActive && isUpdating} />
  }
}

export default CrafterMachineNodeStateful
