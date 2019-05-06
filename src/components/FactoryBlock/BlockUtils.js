import { SELECTION, DELETE, MOVE, ROTATE } from '../../utils/editionUtils'
import { Empty } from '../../utils/machineUtils'

export const isEmptyNode = node => node.machine && node.machine.type && node.machine.type === Empty

export const areSamePosition = (position1, position2) =>
  position1.row === position2.row && position1.column === position2.column

export const isSelectedInMoveAction = (position, moveSelectedNode) =>
  moveSelectedNode && areSamePosition(moveSelectedNode.position, position)

export const actionHandler = {
  [DELETE]: ({ deleteBlock, position }) => deleteBlock(position),
  [SELECTION]: ({ updateBlock, position, machineSelected, currency }) =>
    updateBlock(position, machineSelected, currency),
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

export const displayAction = props =>
  actionHandler[props.actionSelected] ? actionHandler[props.actionSelected](props) : null

export const getDirection = node => node.machine.direction
