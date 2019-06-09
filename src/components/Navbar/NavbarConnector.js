import { connect } from 'react-redux'
import { getUser } from '../../selectors/User'

const connector = Navbar => {
  const mapStateToProps = state => ({
    user: getUser(state),
    gameName: 'Game name',
  })

  return connect(mapStateToProps)(Navbar)
}

export default connector
