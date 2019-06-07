import { connect } from 'react-redux'
import { tick, updateGame } from '../../../actions/GameState'
import { gameState, getTick } from '../../../selectors/GameState'
import { getUser } from '../../../selectors/User'

const connector = Frequency => {
  const mapStateToProps = state => ({
    ticks: getTick(state),
    game: gameState(state),
    user: getUser(state),
  })
  const mapDispatchToProps = dispatch => ({
    tick: () => dispatch(tick()),
    onUpdate: (user, game) => dispatch(updateGame(user.id, game)),
  })

  return connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Frequency)
}

export default connector
