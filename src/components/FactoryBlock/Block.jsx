import React, { Component } from 'react'
import { Card } from '@material-ui/core'
import connector from './BlockConnector'
import { machineByType, Empty } from '../../utils/machineUtils'
import './Block.css'
import { SELECTION, DELETE } from '../../utils/editionUtils'

const actionHandler = ({ action, position, deleteDispatch }) => {
  if (action === DELETE) {
    deleteDispatch(position)
  }
}

class Block extends Component {
  onClick = () => {
    const { position, machineSelected, actionSelected, updateBlock, node, deleteBlock } = this.props

    // @TODO maybe this check could be in another place
    if (!machineSelected && actionSelected === SELECTION) return

    if (machineSelected && node.type === Empty) {
      updateBlock(position, machineSelected.name)
    }

    if (actionSelected !== SELECTION && node.type !== Empty) {
      actionHandler({ action: actionSelected, position, deleteDispatch: deleteBlock })
    }
  }

  render() {
    const { node } = this.props
    const MachineNode = machineByType[node.type]
    return (
      <div className="Block" onClick={this.onClick}>
        <Card>
          <MachineNode className="MachineNode" />
        </Card>
      </div>
    )
  }
}

export default connector(Block)
