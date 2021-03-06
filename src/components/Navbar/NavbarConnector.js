import { connect } from 'react-redux'
import { getUser } from '../../selectors/User'
import { cleanGame } from '../../actions/GameState'
import { currentSaveState, currentGameName } from '../../selectors/GameState'

const connector = Navbar => {
  const mapStateToProps = state => ({
    user: getUser(state),
    gameName: currentGameName(state),
    saveState: currentSaveState(state),
  })

  const mapDispatchToProps = dispatch => ({
    onClick: () => {
      dispatch(cleanGame())
    },
  })

  return connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Navbar)
}

export default connector
