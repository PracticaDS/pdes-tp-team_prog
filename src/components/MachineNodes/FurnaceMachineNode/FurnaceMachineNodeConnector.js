import { connect } from 'react-redux'
import { createItems, deleteItems } from '../../../actions/Grid'
import { getTick } from '../../../selectors/GameState'
import { getDimensions } from '../../../selectors/GameDimensions'

const connector = FurnaceMachineNode => {
  const mapStateToProps = (state, props) => ({
    ...props,
    tick: getTick(state),
    dimensions: getDimensions(state),
  })
  const mapDispatchToProps = dispatch => ({
    createItems: (position, items) => dispatch(createItems(position, items)),
    deleteItems: (position, items) => dispatch(deleteItems(position, items)),
  })

  return connect(
    mapStateToProps,
    mapDispatchToProps,
  )(FurnaceMachineNode)
}

export default connector
