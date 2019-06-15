import { connect } from 'react-redux'
import { createRawMaterial, deleteItems } from '../../../actions/Grid'
import { getIsUpdating, getTick } from '../../../selectors/GameState'
import { getDimensions } from '../../../selectors/GameDimensions'
import { createStackAction } from '../../../actions/GameState'

const connector = CrafterMachineNode => {
  const mapStateToProps = state => ({
    tick: getTick(state),
    dimensions: getDimensions(state),
    isUpdating: getIsUpdating(state),
  })
  const mapDispatchToProps = dispatch => ({
    createRawMaterial: (position, material) =>
      dispatch(createStackAction(createRawMaterial(position, material))),
    deleteItems: (position, items) => dispatch(createStackAction(deleteItems(position, items))),
  })

  return connect(
    mapStateToProps,
    mapDispatchToProps,
  )(CrafterMachineNode)
}

export default connector
