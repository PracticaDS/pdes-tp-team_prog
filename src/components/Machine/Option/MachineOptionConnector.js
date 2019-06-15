import { connect } from 'react-redux'
import { selectMachine } from '../../../actions/GameState'
import { getCurrency, machineSelected, machineTypeSelected } from '../../../selectors/GameState'

const connector = MachineComponent => {
  const mapStateToProps = state => ({
    machineSelected: machineSelected(state),
    machineTypeSelected: machineTypeSelected(state),
    currency: getCurrency(state),
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
