import React, { Component } from 'react'
import { Card } from '@material-ui/core'
import connector from './BlockConnector'
import { machineByType, Empty } from '../../utils/machineUtils'
import './Block.css'
import { SELECTION, DELETE, MOVE, ROTATE } from '../../utils/editionUtils'

const areSamePosition = (position1, position2) =>
  position1.row === position2.row && position1.column === position2.column

const actionHandler = {
  [DELETE]: ({ deleteBlock, position }) => deleteBlock(position),
  [SELECTION]: ({ updateBlock, position, machineSelected }) =>
    updateBlock(position, machineSelected),
  [ROTATE]: ({ node, rotateBlock }) => {
    if (node.machine.type !== Empty) {
      rotateBlock(node.position)
    }
  },
  [MOVE]: ({ moveBlock, selectMoveBlock, position, node, moveSelectedNode }) =>
    moveSelectedNode && !areSamePosition(moveSelectedNode.position, position)
      ? moveBlock(moveSelectedNode, position)
      : selectMoveBlock(node),
}

const isSelectedInMoveAction = (position, moveSelectedNode) =>
  moveSelectedNode && areSamePosition(moveSelectedNode.position, position)

const displayAction = props =>
  actionHandler[props.actionSelected] ? actionHandler[props.actionSelected](props) : null

class Block extends Component {
  render() {
    const { node, position, moveSelectedNode } = this.props
    const MachineNode = machineByType[node.machine.type]
    return (
      <div
        className={
          isSelectedInMoveAction(position, moveSelectedNode) ? 'MoveSelectedBlock' : 'Block'
        }
        onClick={() => displayAction(this.props)}
      >
        <Card>
          <MachineNode className="MachineNode" {...this.props} />
        </Card>
      </div>
    )
  }
}

export default connector(Block)
