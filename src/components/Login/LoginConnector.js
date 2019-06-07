import { connect } from 'react-redux'
import { login } from '../../actions/User'
import { getUser } from '../../selectors/User'

const connector = Login => {
  const mapStateToProps = state => ({
    user: getUser(state),
  })
  const mapDispatchToProps = dispatch => ({
    login: user => dispatch(login(user)),
  })

  return connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Login)
}

export default connector
