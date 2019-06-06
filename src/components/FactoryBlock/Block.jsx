import React from 'react'
import { Card } from '@material-ui/core'
import './Block.css'
import { getDegree } from '../../utils/directions'
import { displayAction } from './BlockUtils'

const Block = ({
  directionToRotate, // component
  isSelected, // component
  isEmptyBlock, // component
  renderNode, // component
  node, // store
  machineSelected,
  currency,
  moveSelectedNode, // store
  actionSelected, // store
  blockActions,
}) => (
  <div
    className={`block ${isSelected ? 'selected' : 'unselected'} ${
      !isEmptyBlock ? ` ${getDegree(directionToRotate)}` : ''
    }`}
    onClick={() =>
      displayAction({
        node,
        currency,
        machineSelected,
        moveSelectedNode,
        actionSelected,
        ...blockActions,
      })
    }
  >
    <Card>{renderNode(node)}</Card>
  </div>
)

export default Block
