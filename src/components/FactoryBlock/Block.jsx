/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types'
import React from 'react'
import './Block.css'

import { Card } from '@material-ui/core'
import EmptyMachineNode from '../MachineNodes/EmptyMachineNode/EmptyMachineNode'

// eslint-disable-next-line react/prop-types
const Block = ({ position: { row, column }, MachineNode }) => (
  <Card className="Block">
    <MachineNode />
  </Card>
)

Block.defaultProps = {
  MachineNode: EmptyMachineNode,
}

export default Block
