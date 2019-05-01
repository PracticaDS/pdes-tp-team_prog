import React, { Component } from 'react'
import { Card } from '@material-ui/core'
import connector from './BlockConnector'
import { machineByType } from '../../utils/machineUtils'
import './Block.css'
import { SELECTION, DELETE, MOVE } from '../../utils/editionUtils'

const actionHandler = {
  [DELETE]: ({ deleteBlock, position }) => deleteBlock(position),
  [SELECTION]: ({ updateBlock, position, machineSelected }) =>
    updateBlock(position, machineSelected),
  [MOVE]: ({ moveBlock, selectMoveBlock, position, node, moveSelectedNode }) =>
    moveSelectedNode && moveSelectedNode.position !== position
      ? moveBlock(moveSelectedNode, position)
      : selectMoveBlock(node, position),
}

const displayAction = props =>
  actionHandler[props.actionSelected] ? actionHandler[props.actionSelected](props) : null

class Block extends Component {
  render() {
    const { node } = this.props
    const MachineNode = machineByType[node.machine.type]
    return (
      <div className="Block" onClick={() => displayAction(this.props)}>
        <Card>
          <MachineNode className="MachineNode" {...this.props} />
        </Card>
      </div>
    )
  }
}

export default connector(Block)
