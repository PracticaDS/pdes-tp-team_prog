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
  withTimeout,
} from '../utils'
import CrafterMachineNode from './CrafterMachineNode'
import { createRawMaterial } from '../../../actions/Grid'

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
        const { node, dimensions, deleteItems } = this.props
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
            withTimeout(() => {
              this.setState(deactivate)
            })
          })
        }
        runCBInValidPosition(outputPosition, dimensions, cb)
      } else {
        this.setState(incrementCount)
      }
    }
  }

  render() {
    const { isActive } = this.state
    return <CrafterMachineNode isActive={isActive} />
  }
}

export default CrafterMachineNodeStateful
