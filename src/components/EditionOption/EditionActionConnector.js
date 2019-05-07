import { connect } from 'react-redux'
import { actionSelected } from '../../selectors/GameState'
import { selectAction } from '../../actions/GameState'

const connector = EditionOption => {
  const mapStateToProps = (state, props) => ({
    isOptionSelected: actionSelected(state) === props.editionOption.title,
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
