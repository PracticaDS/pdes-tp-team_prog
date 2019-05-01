import { connect } from 'react-redux'
import { selectMachine } from '../../actions/GameState'
import { machineSelected } from '../../selectors/GameState'

const connector = Machine => {
  const mapStateToProps = state => ({
    machineSelected: machineSelected(state),
  })
  const mapDispatchToProps = dispatch => ({
    selectMachine: machine => dispatch(selectMachine(machine)),
  })

  return connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Machine)
}

export default connector
