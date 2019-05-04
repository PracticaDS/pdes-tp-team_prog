import { connect } from 'react-redux'
import { selectMachine } from '../../actions/GameState'
import { machineSelected } from '../../selectors/GameState'

const connector = MachineComponent => {
  const mapStateToProps = (state, { machine }) => ({
    isSelected: machineSelected(state) && machineSelected(state).id === machine.id,
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
