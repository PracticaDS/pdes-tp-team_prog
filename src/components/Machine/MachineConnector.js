import { connect } from 'react-redux'
import { selectMachine } from '../../actions/GameState'
import { machineSelected } from '../../selectors/GameState'

const connector = MachineComponent => {
  const mapStateToProps = state => ({
    machineSelected: machineSelected(state),
  })
  const mapDispatchToProps = dispatch => ({
    selectMachine: machine => dispatch(selectMachine(machine)),
    selectStarter: (machine, material) => {
      machine.metadata = { selectedMaterial: material, availableMaterials: [material] }
      dispatch(selectMachine(machine))
    },
  })

  return connect(
    mapStateToProps,
    mapDispatchToProps,
  )(MachineComponent)
}

export default connector
