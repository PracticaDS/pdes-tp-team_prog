import { connect } from 'react-redux'
import { deleteItems } from '../../../actions/Grid'
import { getTick } from '../../../selectors/GameState'
import { incrementCurrency } from '../../../actions/Currency'

const connector = StarterMachineNode => {
  const mapStateToProps = (state, props) => ({
    ...props,
    tick: getTick(state),
  })
  const mapDispatchToProps = dispatch => ({
    incrementCurrency: addedCurrency => dispatch(incrementCurrency(addedCurrency)),
    deleteItems: (position, items) => {
      dispatch(deleteItems(position, items))
    },
  })

  return connect(
    mapStateToProps,
    mapDispatchToProps,
  )(StarterMachineNode)
}

export default connector
