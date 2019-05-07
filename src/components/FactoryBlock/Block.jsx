import React from 'react'
import { Card } from '@material-ui/core'
import './Block.css'
import { getDegree } from '../../utils/directions'

const Block = ({
  node, // store
  position, // prop
  displayAction, // store
  directionToRotate, // store
  isSelected, // store
  isEmptyBlock, // store
  renderNode, // prop
  blockActions, // store
}) => (
  <div
    className={isSelected ? 'MoveSelectedBlock' : 'Block'}
    style={!isEmptyBlock ? getDegree(directionToRotate) : {}}
    onClick={() => displayAction(position, blockActions)}
  >
    <Card>{renderNode(node)}</Card>
  </div>
)

export default Block
