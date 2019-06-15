import { connect } from 'react-redux'
import { tick } from '../../../actions/GameState'
import { getTick } from '../../../selectors/GameState'

const connector = Frequency => {
  const mapStateToProps = state => ({
    ticks: getTick(state),
  })
  const mapDispatchToProps = dispatch => ({
    tick: () => dispatch(tick()),
  })

  return connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Frequency)
}

export default connector
