import { connect } from 'react-redux'
import { machineSelected } from '../../selectors/GameState'
import { updateBlock } from '../../actions/Grid'

const connector = Block => {
  const mapStateToProps = state => ({
    machineSelected: machineSelected(state),
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
