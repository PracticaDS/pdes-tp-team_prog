import { connect } from 'react-redux'
import { getIsUpdating, getTick } from '../../../selectors/GameState'
import { getDimensions } from '../../../selectors/GameDimensions'

const connector = MachineComponent => {
  const mapStateToProps = state => ({
    tick: getTick(state),
    dimensions: getDimensions(state),
    isUpdating: getIsUpdating(state),
  })
  return connect(mapStateToProps)(MachineComponent)
}

export default connector
