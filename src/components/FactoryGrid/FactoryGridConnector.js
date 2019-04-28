import { connect } from 'react-redux'
import { selectDimensions } from '../../selectors/Grid'

const connector = FactoryGrid => {
  const mapStateToProps = state => ({
    dimensions: selectDimensions(state),
  })
  const mapDispatchToProps = () => ({})

  return connect(
    mapStateToProps,
    mapDispatchToProps,
  )(FactoryGrid)
}

export default connector
