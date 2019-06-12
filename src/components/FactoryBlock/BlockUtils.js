import { SELECTION, DELETE, MOVE, ROTATE } from '../../utils/editionUtils'
import { Empty } from '../../utils/machineUtils'

export const isEmptyNode = node => node.machine && node.machine.type && node.machine.type === Empty

export const areSamePosition = (position1, position2) =>
  position1.row === position2.row && position1.column === position2.column

export const isSelectedInMoveAction = (position, moveSelectedNode) =>
  moveSelectedNode && areSamePosition(moveSelectedNode.position, position)

export const actionHandler = {
  [DELETE]: ({ node, deleteBlock }) => deleteBlock(node.position),
  [SELECTION]: ({ node, machineSelected, currency, updateBlock }) => {
    if (machineSelected && isEmptyNode(node)) {
      updateBlock(node.position, machineSelected, currency)
    }
  },
  [ROTATE]: ({ node, rotateBlock }) => {
    if (node.machine.type !== Empty) {
      rotateBlock(node.position)
    }
  },
  [MOVE]: ({ node, moveSelectedNode, moveBlock, selectMoveBlock }) =>
    moveSelectedNode && !areSamePosition(moveSelectedNode.position, node.position)
      ? moveBlock(moveSelectedNode, node.position)
      : selectMoveBlock(node),
}

export const displayAction = props => {
  if (actionHandler[props.actionSelected]) {
    actionHandler[props.actionSelected](props)
  }
}

export const getDirection = node => node.machine.direction
