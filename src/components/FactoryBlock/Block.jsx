import React, { Component } from 'react'
import { Card } from '@material-ui/core'
import connector from './BlockConnector'
import { machineByType, Empty } from '../../utils/machineUtils'
import './Block.css'
import { SELECTION, DELETE, ROTATE } from '../../utils/editionUtils'

const isEmptyNode = node => node.machine && node.machine.type && node.machine.type === Empty

const blockActionHandler = {
  [SELECTION]: ({ machineSelected, updateBlock, node, position }) => {
    if (machineSelected && isEmptyNode(node)) {
      updateBlock(position, machineSelected)
    }
  },
  [DELETE]: ({ position, node, deleteBlock }) => {
    if (!isEmptyNode(node)) {
      deleteBlock(position)
    }
  },
  [ROTATE]: ({ node, rotateBlock }) => {
    if (!isEmptyNode(node)) {
      rotateBlock(node.position)
    }
  },
}

const blockActionDispatcher = props =>
  blockActionHandler[props.actionSelected] ? blockActionHandler[props.actionSelected](props) : null

class Block extends Component {
  onClick = () => {
    blockActionDispatcher(this.props)
  }

  render() {
    const { node } = this.props
    const MachineNode = machineByType[node.machine.type]
    return (
      <div className="Block" onClick={this.onClick}>
        <Card>
          <MachineNode className="MachineNode" {...this.props} />
        </Card>
      </div>
    )
  }
}

export default connector(Block)
