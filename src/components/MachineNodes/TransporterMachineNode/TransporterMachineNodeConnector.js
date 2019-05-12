import { connect } from 'react-redux'
import { createItems, deleteItems } from '../../../actions/Grid'
import { getCurrency, getTick } from '../../../selectors/GameState'

const connector = TransporterMachineNode => {
  const mapStateToProps = (state, props) => ({
    ...props,
    currency: getCurrency(state),
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
