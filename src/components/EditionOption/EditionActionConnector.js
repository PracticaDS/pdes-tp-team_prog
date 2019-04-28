import { connect } from 'react-redux'
import { actionSelected } from '../../selectors/GameState'
import { selectAction } from '../../actions/GameState'

const connector = EditionOption => {
  const mapStateToProps = state => ({
    editionActionSelected: actionSelected(state),
  })
  const mapDispatchToProps = dispatch => ({
    onSelectAction: action => dispatch(selectAction(action)),
  })

  return connect(
    mapStateToProps,
    mapDispatchToProps,
  )(EditionOption)
}

export default connector
