import { connect } from 'react-redux'
import { tick } from '../../../actions/GameState'

const connector = Frequency => {
  const mapStateToProps = null
  const mapDispatchToProps = dispatch => ({
    tick: () => dispatch(tick()),
  })

  return connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Frequency)
}

export default connector
