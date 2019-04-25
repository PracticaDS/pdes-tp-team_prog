import { connect } from 'react-redux'
import { getDimensions } from '../../selectors/GameDimensions'
import { playGame, nextTick } from '../../actions/GameState'
import { restartCurrency } from '../../actions/Currency'

const connector = Game => {
  const mapStateToProps = state => ({
    dimensions: getDimensions(state),
  })
  const mapDispatchToProps = dispatch => ({
    restartCurrency: () => dispatch(restartCurrency()),
    startGame: () => dispatch(playGame()),
    nextTick: () => dispatch(nextTick()),
  })

  return connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Game)
}

export default connector
