import { connect } from 'react-redux'
import { getDimensions } from '../../selectors/GameDimensions'
import { machineSelected } from '../../selectors/GameState'
import { playGame, tick } from '../../actions/GameState'
import { restartCurrency } from '../../actions/Currency'

const connector = Game => {
  const mapStateToProps = state => ({
    dimensions: getDimensions(state),
    machineSelected: machineSelected(state),
  })
  const mapDispatchToProps = dispatch => ({
    restartCurrency: () => dispatch(restartCurrency()),
    startGame: () => dispatch(playGame()),
    tick: () => dispatch(tick()),
  })

  return connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Game)
}

export default connector
