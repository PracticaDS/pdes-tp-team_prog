/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import { Card } from '@material-ui/core'
import connector from './BlockConnector'
import EmptyMachineNode from '../MachineNodes/EmptyMachineNode/EmptyMachineNode'
import { machineByType } from '../../utils/machineUtils'
import './Block.css'

class Block extends Component {
  constructor(props) {
    super(props)
    this.state = {
      MachineNode: EmptyMachineNode,
    }
  }

  onClick = () => {
    const { position, machineSelected, updateBlock } = this.props
    const { MachineNode } = this.state

    if (machineSelected && MachineNode === EmptyMachineNode) {
      // TODO: maybe this check should be in another place
      this.setState({ MachineNode: machineByType[machineSelected] })
      updateBlock(position, machineSelected)
    }
  }

  render() {
    const { MachineNode } = this.state
    return (
      <div className="Block" onClick={this.onClick}>
        <Card>
          <MachineNode className="MachineNode" />
        </Card>
      </div>
    )
  }
}

Block.defaultProps = {
  MachineNode: EmptyMachineNode,
}

export default connector(Block)
