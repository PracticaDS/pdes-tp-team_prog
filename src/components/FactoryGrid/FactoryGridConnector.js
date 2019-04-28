import { connect } from 'react-redux'
import { currentNodes } from '../../selectors/Grid'

const connector = FactoryGrid => {
  const mapStateToProps = state => ({
    currentNodes: currentNodes(state),
  })
  const mapDispatchToProps = () => ({})

  return connect(
    mapStateToProps,
    mapDispatchToProps,
  )(FactoryGrid)
}

export default connector
