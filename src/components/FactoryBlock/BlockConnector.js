import { connect } from 'react-redux'
import { machineSelected, actionSelected, moveSelectedNode } from '../../selectors/GameState'
import { selectMachineNode } from '../../selectors/Grid'
import { updateBlock, deleteBlock, moveBlock } from '../../actions/Grid'
import { selectMoveBlock, deselectMoveBlock } from '../../actions/GameState'

const connector = Block => {
  const mapStateToProps = (state, props) => ({
    machineSelected: machineSelected(state),
    actionSelected: actionSelected(state),
    moveSelectedNode: moveSelectedNode(state),
    node: selectMachineNode(state, props.position),
  })
  const mapDispatchToProps = dispatch => ({
    updateBlock: (position, machineType) => {
      if (machineType) {
        dispatch(updateBlock(position, machineType))
      }
    },
    deleteBlock: position => dispatch(deleteBlock(position)),
    moveBlock: (selectedNode, position) => {
      dispatch(moveBlock(selectedNode, position))
      dispatch(deselectMoveBlock())
    },
    selectMoveBlock: node => dispatch(selectMoveBlock(node)),
  })

  return connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Block)
}

export default connector
