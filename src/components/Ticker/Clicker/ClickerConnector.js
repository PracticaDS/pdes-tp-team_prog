import { connect } from 'react-redux'
import { tick } from '../../../actions/GameState'

const connector = Clicker => {
  const mapStateToProps = () => ({})
  const mapDispatchToProps = dispatch => ({
    tick: () => dispatch(tick()),
  })

  return connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Clicker)
}

export default connector
