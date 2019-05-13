import React from 'react'
import { Card, CardMedia } from '@material-ui/core'
import transporter from '../../../assets/transporter.png'
import { applyDirection, isPositionValid } from '../../../utils/directions'
import connector from './TransporterMachineNodeConnector'

const TransporterMachineNode = () => (
  <Card>
    <CardMedia component="img" image={transporter} />
  </Card>
)

class TransporterMachineNodeStateful extends React.Component {
  constructor(props) {
    super(props)
    this.state = { personalCount: 0 }
  }

  componentWillReceiveProps(nextProps) {
    const { personalCount } = this.state
    const { tick, node, createItems, deleteItems, dimensions } = this.props
    const { machine, position, items } = node
    const updatedTick = nextProps.tick

    if (updatedTick !== tick) {
      if (personalCount < machine.frequency) {
        this.setState(state => ({ personalCount: state.personalCount + 1 }))
      } else {
        this.setState(
          () => ({ personalCount: 0 }),
          () => {
            const func = () => {
              const outputPosition = applyDirection(position, machine.direction)

              if (isPositionValid(outputPosition, dimensions)) {
                createItems(outputPosition, Object.values(items))
                deleteItems(node.position, Object.values(items))
              }
            }
            machine.process([], func)
          },
        )
      }
    }
  }

  render() {
    return <TransporterMachineNode {...this.props} />
  }
}

export default connector(TransporterMachineNodeStateful)
