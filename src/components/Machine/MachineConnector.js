import { connect } from 'react-redux'
import { selectMachine } from '../../actions/GameState'
import { machineTypeSelected } from '../../selectors/GameState'

const connector = MachineComponent => {
  const mapStateToProps = state => ({
    machineTypeSelected: machineTypeSelected(state),
  })
  const mapDispatchToProps = dispatch => ({
    selectMachine: machine => dispatch(selectMachine(machine)),
  })

  return connect(
    mapStateToProps,
    mapDispatchToProps,
  )(MachineComponent)
}

export default connector
