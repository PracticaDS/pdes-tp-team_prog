/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import { Card } from '@material-ui/core'
import connector from './BlockConnector'
import { machineByType, Empty } from '../../utils/machineUtils'
import './Block.css'

class Block extends Component {
  onClick = () => {
    const { position, machineSelected, updateBlock, node } = this.props

    if (machineSelected && node.type === Empty) {
      // TODO: maybe this check should be in another place
      updateBlock(position, machineSelected)
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
