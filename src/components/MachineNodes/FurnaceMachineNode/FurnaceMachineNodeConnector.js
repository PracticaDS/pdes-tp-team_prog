import { connect } from 'react-redux'
import { createItems, deleteItems } from '../../../actions/Grid'
import { getIsUpdating, getTick } from '../../../selectors/GameState'
import { getDimensions } from '../../../selectors/GameDimensions'
import { createStackAction } from '../../../actions/GameState'

const connector = FurnaceMachineNode => {
  const mapStateToProps = state => ({
    tick: getTick(state),
    dimensions: getDimensions(state),
    isUpdating: getIsUpdating(state),
  })
  const mapDispatchToProps = dispatch => ({
    createItems: (position, items) => dispatch(createStackAction(createItems(position, items))),
    deleteItems: (position, items) => dispatch(createStackAction(deleteItems(position, items))),
  })

  return connect(
    mapStateToProps,
    mapDispatchToProps,
  )(FurnaceMachineNode)
}

export default connector
