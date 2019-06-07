import { connect } from 'react-redux'
import { getUser } from '../../selectors/User'
import { deleteGame, newGame, playGame } from '../../actions/GameState'
import { gameState } from '../../selectors/GameState'

const connector = Home => {
  const mapStateToProps = state => ({
    user: getUser(state),
    game: gameState(state),
  })
  const mapDispatchToProps = dispatch => ({
    newGame: userId => dispatch(newGame(userId)),
    playGame: (userId, gameId) => dispatch(playGame(userId, gameId)),
    deleteGame: (userId, gameId) => dispatch(deleteGame(userId, gameId)),
  })
  return connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Home)
}

export default connector
