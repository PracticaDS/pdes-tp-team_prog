import { connect } from 'react-redux'
import { machineSelected, actionSelected, moveSelectedNode } from '../../selectors/GameState'
import { selectMachineNode } from '../../selectors/Grid'
import { updateBlock, deleteBlock, moveBlock, rotateBlock } from '../../actions/Grid'
import { selectMoveBlock, deselectMoveBlock } from '../../actions/GameState'

const connector = Block => {
  const mapStateToProps = (state, props) => ({
    machineSelected: machineSelected(state),
    actionSelected: actionSelected(state),
    moveSelectedNode: moveSelectedNode(state),
    node: selectMachineNode(state, props.position),
  })
  const mapDispatchToProps = dispatch => ({
    updateBlock: (position, machine) => {
      if (machine) {
        dispatch(updateBlock(position, machine))
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
