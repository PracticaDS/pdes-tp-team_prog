import React from 'react'
import { applyDirection } from '../../../utils/directions'
import connector from './FurnaceMachineNodeConnector'
import FurnaceMachineNode from './FurnaceMachineNode'
import {
  activateNode,
  deactivate,
  incrementCount,
  isFrequencyFinished,
  runCBInValidPosition,
  withTimeout,
} from '../utils'

const canMeltMaterial = material => material.type === 'metal'

const createMeltItem = item => ({
  ...item,
  name: `${item.name} Melted`,
  quantity: 1, // machine.frequency
  price: item.price * 10,
  type: 'molten_metal',
})

class FurnaceMachineNodeStateful extends React.Component {
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
        const { node, dimensions, deleteItems, createItems } = this.props
        const { machine, position, items } = node
        const { direction } = machine
        const values = Object.values(items)
        const outputPosition = applyDirection(position, direction)

        const cb = () => {
          if (values.length > 0) {
            this.setState(activateNode, () => {
              const toDeleteItems = values.filter(item => !canMeltMaterial(item))
              const toCreateItems = values.filter(canMeltMaterial).map(createMeltItem)

              deleteItems(position, toDeleteItems)
              createItems(outputPosition, toCreateItems)

              withTimeout(() => {
                this.setState(deactivate())
              })
            })
          }
        }

        runCBInValidPosition(outputPosition, dimensions, cb)
      } else {
        this.setState(incrementCount)
      }
    }
  }

  render() {
    const { isActive } = this.state
    return <FurnaceMachineNode isActive={isActive} />
  }
}

export default connector(FurnaceMachineNodeStateful)
