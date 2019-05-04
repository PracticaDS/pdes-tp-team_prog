import { connect } from 'react-redux'
import {
  machineSelected,
  actionSelected,
  moveSelectedNode,
  getCurrency,
} from '../../selectors/GameState'
import { selectMachineNode } from '../../selectors/Grid'
import {
  updateBlock as actionUpdate,
  deleteBlock as actionDelete,
  moveBlock as actionMove,
  rotateBlock as actionRotate,
} from '../../actions/Grid'
import {
  selectMoveBlock as actionSelectMove,
  deselectMoveBlock as actionDeselectMove,
  buyMachine as actionBuyMachine,
} from '../../actions/GameState'
import { actionHandler, getDirection, isEmptyNode, isSelectedInMoveAction } from './BlockUtils'

const connector = Block => {
  const mapStateToProps = (state, props) => ({
    node: selectMachineNode(state, props.position),
    isSelected: isSelectedInMoveAction(props.position, moveSelectedNode(state)),
    isEmptyBlock: isEmptyNode(selectMachineNode(state, props.position)),
    directionToRotate: getDirection(selectMachineNode(state, props.position)),
    displayAction: (position, blockActions) => {
      if (actionSelected(state)) {
        actionHandler[actionSelected(state)]({
          position,
          machineSelected: machineSelected(state),
          node: selectMachineNode(state, position),
          moveSelectedNode: moveSelectedNode(state),
          currency: getCurrency(state),
          ...blockActions,
        })
      }
    },
  })
  const mapDispatchToProps = dispatch => ({
    blockActions: {
      updateBlock: (position, machine, currency) => {
        if (machine && currency >= machine.buy) {
          dispatch(actionUpdate(position, machine))
          dispatch(actionBuyMachine(machine.buy))
        }
      },
      deleteBlock: position => dispatch(actionDelete(position)),
      moveBlock: (selectedNode, position) => {
        dispatch(actionMove(selectedNode, position))
        dispatch(actionDeselectMove())
      },
      selectMoveBlock: node => dispatch(actionSelectMove(node)),
      rotateBlock: position => dispatch(actionRotate(position)),
    },
  })

  return connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Block)
}

export default connector
