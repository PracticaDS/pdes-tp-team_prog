import { connect } from 'react-redux'
import { getCurrency } from '../../selectors/GameState'

const connector = ResourcesBar => {
  const mapStateToProps = state => ({
    currency: getCurrency(state),
  })
  const mapDispatchToProps = () => ({})

  return connect(
    mapStateToProps,
    mapDispatchToProps,
  )(ResourcesBar)
}

export default connector
