import { connect } from 'react-redux'
import { selectDimensions } from '../../selectors/Grid'

const connector = FactoryGrid => {
  const mapStateToProps = state => ({
    dimensions: selectDimensions(state),
  })

  return connect(mapStateToProps)(FactoryGrid)
}

export default connector
