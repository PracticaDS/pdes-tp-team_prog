import React from 'react'
import { activateNode, deactivate, incrementCount, isFrequencyFinished } from '../utils'
import Machine from '../Machine'
import { createStackAction } from '../../../actions/GameState'

class MachineNode extends React.Component {
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
    const { tick, run, dispatch } = this.props

    if (nextTick !== tick) {
      if (isFrequencyFinished(this.props, this.state)) {
        const actions = run(this.props)
        if (actions.length > 0) {
          this.setState(activateNode, () => {
            actions.forEach(action => {
              dispatch(createStackAction(action))
            })
          })
        }
      } else {
        this.setState(incrementCount)
        this.setState(deactivate)
      }
    }
  }

  render() {
    const { isUpdating, activeImg, nonActiveImg } = this.props
    const { isActive } = this.state
    return (
      <Machine
        isActive={isActive && isUpdating}
        activeImg={activeImg}
        nonActiveImg={nonActiveImg}
      />
    )
  }
}

// activeImg, nonActiveImg, run

export default MachineNode
