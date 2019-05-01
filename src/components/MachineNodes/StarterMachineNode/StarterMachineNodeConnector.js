import { connect } from 'react-redux'
import { createRawMaterial } from '../../../actions/Grid'
import { getTick } from '../../../selectors/GameState'

const connector = StarterMachineNode => {
  const mapStateToProps = (state, props) => ({
    ...props,
    tick: getTick(state),
  })
  const mapDispatchToProps = dispatch => ({
    createRawMaterial: (position, material) => dispatch(createRawMaterial(position, material)),
  })

  return connect(
    mapStateToProps,
    mapDispatchToProps,
  )(StarterMachineNode)
}

export default connector
