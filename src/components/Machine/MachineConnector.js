import { connect } from 'react-redux'
import { selectMachine } from '../../actions/GameState'
import { getCurrency, machineTypeSelected } from '../../selectors/GameState'
import { recipes, materials } from '../Game/Game.constants'

const connector = MachineComponent => {
  const mapStateToProps = state => ({
    machineTypeSelected: machineTypeSelected(state),
    recipes,
    basicMaterials: materials,
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
