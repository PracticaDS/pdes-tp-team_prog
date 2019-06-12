import { connect } from 'react-redux'
import { getCurrency } from '../../selectors/GameState'
import { getUser } from '../../selectors/User'

const connector = ResourcesBar => {
  const mapStateToProps = state => ({
    currency: getCurrency(state),
    user: getUser(state),
  })

  return connect(mapStateToProps)(ResourcesBar)
}

export default connector
