import { connect } from 'react-redux'
import { tick, updateGame } from '../../../actions/GameState'
import { gameStateId, getCurrency, getTick } from '../../../selectors/GameState'
import { getUser } from '../../../selectors/User'
import { getGrid } from '../../../selectors/Grid'

const connector = Frequency => {
  const mapStateToProps = state => ({
    ticks: getTick(state),
    gameId: gameStateId(state),
    currency: getCurrency(state),
    grid: getGrid(state),
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
