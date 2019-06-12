import { connect } from 'react-redux'
import {
  actionSelected,
  moveSelectedNode,
  getCurrency,
  machineSelected,
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
import { getDirection, isEmptyNode, isSelectedInMoveAction } from './BlockUtils'

const connector = Block => {
  const mapStateToProps = (state, props) => ({
    node: selectMachineNode(state, props.position),
    isSelected: isSelectedInMoveAction(props.position, moveSelectedNode(state)),
    isEmptyBlock: isEmptyNode(selectMachineNode(state, props.position)),
    directionToRotate: getDirection(selectMachineNode(state, props.position)),
    moveSelectedNode: moveSelectedNode(state),
    actionSelected: actionSelected(state),
    currency: getCurrency(state),
    machineSelected: machineSelected(state),
  })
  const mapDispatchToProps = dispatch => ({
    blockActions: {
      updateBlock: (position, machine, currency) => {
        if (machine && currency >= machine.price) {
          dispatch(actionUpdate(position, machine))
          dispatch(actionBuyMachine(machine.price))
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
