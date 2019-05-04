import { connect } from 'react-redux'
import {
  machineSelected,
  actionSelected,
  moveSelectedNode,
  getCurrency,
} from '../../selectors/GameState'
import { selectMachineNode } from '../../selectors/Grid'
import { updateBlock, deleteBlock, moveBlock, rotateBlock } from '../../actions/Grid'
import { selectMoveBlock, deselectMoveBlock, buyMachine } from '../../actions/GameState'

const connector = Block => {
  const mapStateToProps = (state, props) => ({
    machineSelected: machineSelected(state),
    actionSelected: actionSelected(state),
    moveSelectedNode: moveSelectedNode(state),
    node: selectMachineNode(state, props.position),
    currency: getCurrency(state),
  })
  const mapDispatchToProps = dispatch => ({
    updateBlock: (position, machine, currency) => {
      if (machine && currency >= machine.buy) {
        dispatch(updateBlock(position, machine))
        dispatch(buyMachine(machine.buy))
      }
    },
    deleteBlock: position => dispatch(deleteBlock(position)),
    moveBlock: (selectedNode, position) => {
      dispatch(moveBlock(selectedNode, position))
      dispatch(deselectMoveBlock())
    },
    selectMoveBlock: node => dispatch(selectMoveBlock(node)),
    rotateBlock: position => dispatch(rotateBlock(position)),
  })

  return connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Block)
}

export default connector
