import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { getUser } from '../../selectors/User'
import { cleanGame } from '../../actions/GameState'

const connector = Navbar => {
  const mapStateToProps = state => ({
    user: getUser(state),
    gameName: 'Game name',
  })

  const mapDispatchToProps = (dispatch, { history }) => ({
    onClick: () => {
      dispatch(cleanGame())
      history.push('/home')
    },
  })

  return withRouter(
    connect(
      mapStateToProps,
      mapDispatchToProps,
    )(Navbar),
  )
}

export default connector
