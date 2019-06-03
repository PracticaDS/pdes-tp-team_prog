import { connect } from 'react-redux'
import { deleteItems } from '../../../actions/Grid'
import { getTick } from '../../../selectors/GameState'
import { incrementCurrency } from '../../../actions/Currency'
import { createStackAction } from '../../../actions/GameState'

const connector = StarterMachineNode => {
  const mapStateToProps = state => ({
    tick: getTick(state),
  })
  const mapDispatchToProps = dispatch => ({
    incrementCurrency: addedCurrency =>
      dispatch(createStackAction(incrementCurrency(addedCurrency))),
    deleteItems: (position, items) => dispatch(createStackAction(deleteItems(position, items))),
  })

  return connect(
    mapStateToProps,
    mapDispatchToProps,
  )(StarterMachineNode)
}

export default connector
