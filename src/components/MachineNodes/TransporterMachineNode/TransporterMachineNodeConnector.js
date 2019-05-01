import { connect } from 'react-redux'
import { createItems, deleteItems } from '../../../actions/Grid'
import { getTick } from '../../../selectors/GameState'

const connector = TransporterMachineNode => {
  const mapStateToProps = (state, props) => ({
    ...props,
    tick: getTick(state),
  })
  const mapDispatchToProps = dispatch => ({
    deleteItems: (position, items) => {
      dispatch(deleteItems(position, items))
    },
    createItems: (position, items) => {
      dispatch(createItems(position, items))
    },
  })

  return connect(
    mapStateToProps,
    mapDispatchToProps,
  )(TransporterMachineNode)
}

export default connector
