import React from 'react'
import { connect } from 'react-redux'
import { machineSelected } from '../../selectors/GameState'
import { playGame } from '../../actions/GameState'
import { restartCurrency } from '../../actions/Currency'
import ResourcesBar from '../Resources/ResourcesConnected'
import FactoryGrid from '../FactoryGrid/FactoryGridConnected'
import LeftPanel from '../LeftPanel/LeftPanel'
import Detail from '../Detail/DetailConnected'
import FrequencyConnected from '../Ticker/Frequency/FrequencyConnected'
// import ClickerConnected from '../Ticker/Clicker/ClickerConnected'
const renderTicker = () => <FrequencyConnected />
// const renderTicker = () => <ClickerConnected />

const connector = Game => {
  const mapStateToProps = state => ({
    renderResources: () => <ResourcesBar />,
    renderLeftPanel: () => <LeftPanel />,
    renderFactoryGrid: () => <FactoryGrid />,
    renderDetail: () => (machineSelected(state) ? <Detail /> : null),
    renderTicker,
  })
  const mapDispatchToProps = dispatch => ({
    restartCurrency: () => dispatch(restartCurrency()),
    startGame: () => dispatch(playGame()),
  })

  return connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Game)
}

export default connector
