import React from 'react'
import { Card, CardMedia } from '@material-ui/core'
import starter from '../../../assets/starter.png'
import connector from './StarterMachineNodeConnector'
import { applyDirection, isPositionValid } from '../../../utils/directions'

const StarterMachineNode = () => (
  <Card>
    <CardMedia component="img" image={starter} />
  </Card>
)

class StarterMachineNodeStateful extends React.Component {
  constructor(props) {
    super(props)
    this.state = { personalCount: 0 }
  }

  componentWillReceiveProps(nextProps) {
    const { personalCount } = this.state
    const { tick, node, createRawMaterial, dimensions } = this.props
    const { machine, position, items } = node
    const updatedTick = nextProps.tick

    if (updatedTick !== tick) {
      if (personalCount < machine.frequency) {
        this.setState(state => ({ personalCount: state.personalCount + 1 }))
      } else {
        this.setState(
          () => ({ personalCount: 0 }),
          () => {
            const func = (dir, input, output) => {
              const outputPosition = applyDirection(position, machine.direction)

              if (isPositionValid(outputPosition, dimensions)) {
                output.forEach(item => {
                  createRawMaterial(outputPosition, { ...item, quantity: machine.frequency })
                })
              }
            }
            machine.process(items, func)
          },
        )
      }
    }
  }

  render() {
    return <StarterMachineNode {...this.props} />
  }
}

export default connector(StarterMachineNodeStateful)
