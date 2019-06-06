import { connect } from 'react-redux'
import { selectMachine } from '../../actions/GameState'
import { getCurrency, machineTypeSelected } from '../../selectors/GameState'
import { recipes } from '../Game/recipe.constants'
import { materials } from '../Game/material.constants'

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
