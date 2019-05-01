import { connect } from 'react-redux'
import { machineSelected, actionSelected } from '../../selectors/GameState'
import { selectMachineNode } from '../../selectors/Grid'
import { updateBlock, deleteBlock } from '../../actions/Grid'

const connector = Block => {
  const mapStateToProps = (state, props) => ({
    machineSelected: machineSelected(state),
    actionSelected: actionSelected(state),
    node: selectMachineNode(state, props.position),
  })
  const mapDispatchToProps = dispatch => ({
    deleteBlock: position => dispatch(deleteBlock(position)),
    updateBlock: (position, machine) => dispatch(updateBlock(position, machine)),
  })

  return connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Block)
}

export default connector
