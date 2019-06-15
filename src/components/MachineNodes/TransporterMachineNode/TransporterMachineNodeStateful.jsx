import React from 'react'
import { applyDirection } from '../../../utils/directions'
import connector from './TransporterMachineNodeConnector'
import TransporterMachineNode from './TransporterMachineNode'
import {
  activateNode,
  deactivate,
  incrementCount,
  isFrequencyFinished,
  runCBInValidPosition,
} from '../utils'

class TransporterMachineNodeStateful extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      personalCount: 0,
      isActive: false,
    }
  }

  // if nextProps.tick === this.props.tick the other prop values have changed
  // it will only change when the tick have changed,
  // it should be the same as doing updatedTick > tick
  componentWillReceiveProps({ tick: nextTick }) {
    const { tick } = this.props

    if (nextTick !== tick) {
      if (isFrequencyFinished(this.props, this.state)) {
        const { node, createItems, deleteItems, dimensions } = this.props
        const { machine, position, items } = node
        const { direction } = machine
        const outputPosition = applyDirection(position, direction)
        const values = Object.values(items)
        const cb = () => {
          if (values.length > 0) {
            this.setState(activateNode, () => {
              createItems(outputPosition, values)
              deleteItems(position, values)
            })
          }
        }

        runCBInValidPosition(outputPosition, dimensions, cb)
      } else {
        this.setState(incrementCount)
        this.setState(deactivate)
      }
    }
  }

  render() {
    const { isUpdating } = this.props
    const { isActive } = this.state
    return <TransporterMachineNode isActive={isActive && isUpdating} />
  }
}

export default connector(TransporterMachineNodeStateful)
