import { connect } from 'react-redux'
import { getCurrency } from '../../selectors/GameState'

const connector = ResourcesBar => {
  const mapStateToProps = state => ({
    currency: getCurrency(state),
  })

  return connect(mapStateToProps)(ResourcesBar)
}

export default connector
