import { connect } from 'react-redux'
import { createRawMaterial, deleteItems } from '../../../actions/Grid'
import { getTick } from '../../../selectors/GameState'
import { getDimensions } from '../../../selectors/GameDimensions'

const connector = CrafterMachineNode => {
  const mapStateToProps = (state, props) => ({
    ...props,
    tick: getTick(state),
    dimensions: getDimensions(state),
  })
  const mapDispatchToProps = dispatch => ({
    createRawMaterial: (position, material) => dispatch(createRawMaterial(position, material)),
    deleteItems: (position, items) => {
      dispatch(deleteItems(position, items))
    },
  })

  return connect(
    mapStateToProps,
    mapDispatchToProps,
  )(CrafterMachineNode)
}

export default connector
