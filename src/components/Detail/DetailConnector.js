import { connect } from 'react-redux'
import { machineSelected } from '../../selectors/GameState'

const connector = Detail => {
  const mapStateToProps = state => ({
    cost: machineSelected(state) ? machineSelected(state).buy : 0,
    frequency: machineSelected(state) ? machineSelected(state).frequency : 0,
    name: machineSelected(state) ? machineSelected(state).name : 'No Name',
  })
  const mapDispatchToProps = () => ({})

  return connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Detail)
}

export default connector
