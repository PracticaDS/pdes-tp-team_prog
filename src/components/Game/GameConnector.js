import { connect } from 'react-redux'
import { playGame } from '../../actions/GameState'
import { restartCurrency } from '../../actions/Currency'
import { gameStateId, machineSelected } from '../../selectors/GameState'

const connector = Game => {
  const mapStateToProps = state => ({
    machineSelected: machineSelected(state),
    gameId: gameStateId(state),
  })
  const mapDispatchToProps = dispatch => ({
    restartCurrency: () => dispatch(restartCurrency()),
    startGame: () => dispatch(playGame()),
  })

  return connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Game)
}

export default connector
