import { connect } from 'react-redux'
import { machineSelected } from '../../selectors/GameState'
import { selectMachineNode } from '../../selectors/Grid'
import { updateBlock } from '../../actions/Grid'

const connector = Block => {
  const mapStateToProps = (state, props) => ({
    machineSelected: machineSelected(state),
    node: selectMachineNode(state, props.position),
  })
  const mapDispatchToProps = dispatch => ({
    updateBlock: (position, machineType) => dispatch(updateBlock(position, machineType)),
  })

  return connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Block)
}

export default connector
