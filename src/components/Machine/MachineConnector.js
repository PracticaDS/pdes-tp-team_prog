import { connect } from 'react-redux'
import { selectMachine } from '../../actions/GameState'

const connector = Machine => {
  const mapStateToProps = () => ({})
  const mapDispatchToProps = dispatch => ({
    selectMachine: machine => dispatch(selectMachine(machine)),
  })

  return connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Machine)
}

export default connector
