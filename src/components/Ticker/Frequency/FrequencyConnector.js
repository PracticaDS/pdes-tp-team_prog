import { connect } from 'react-redux'
import { tick } from '../../../actions/GameState'
import { TIMER_TIME } from '../../../utils/defaultValues'

const connector = Frequency => {
  const mapStateToProps = () => ({
    frequency: TIMER_TIME,
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
