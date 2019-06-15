import { connect } from 'react-redux'
import { createRawMaterial } from '../../../actions/Grid'
import { getTick, getIsUpdating } from '../../../selectors/GameState'
import { getDimensions } from '../../../selectors/GameDimensions'
import { createStackAction } from '../../../actions/GameState'

const connector = StarterMachineNode => {
  const mapStateToProps = state => ({
    tick: getTick(state),
    dimensions: getDimensions(state),
    isUpdating: getIsUpdating(state),
  })
  const mapDispatchToProps = dispatch => ({
    createRawMaterial: (position, material) =>
      dispatch(createStackAction(createRawMaterial(position, material))),
  })

  return connect(
    mapStateToProps,
    mapDispatchToProps,
  )(StarterMachineNode)
}

export default connector
