import React from 'react'
import connector from './StarterMachineNodeConnector'
import { applyDirection } from '../../../utils/directions'
import StarterMachineNode from './StarterMachineNode'
import {
  activateNode,
  deactivate,
  incrementCount,
  isFrequencyFinished,
  runCBInValidPosition,
  withTimeout,
} from '../utils'

class StarterMachineNodeStateful extends React.Component {
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
        const { node, createRawMaterial, dimensions } = this.props
        const { machine, position } = node
        const { direction, frequency, metadata } = machine
        const { selectedMaterial } = metadata
        const outputPosition = applyDirection(position, direction)
        const materials = [{ ...selectedMaterial, frequency }]
        const cb = () => {
          this.setState(activateNode, () => {
            materials.forEach(material => {
              createRawMaterial(outputPosition, {
                ...material,
                quantity: machine.frequency,
              })
            })
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
    return <StarterMachineNode isActive={isActive} />
  }
}

export default connector(StarterMachineNodeStateful)
