import React from 'react'
import { Redirect, withRouter } from 'react-router-dom'
import Game from './Game'
import GameConnector from './GameConnector'
import FrequencyConnected from '../Ticker/Frequency/FrequencyConnected'
import ResourcesBar from '../Resources/ResourcesConnected'
import LeftPanel from '../LeftPanel/LeftPanel'
import FactoryGrid from '../FactoryGrid/FactoryGridConnected'
import Detail from '../Detail/DetailConnected'
import Navbar from '../Navbar/NavbarConnected'
// import ClickerConnected from '../Ticker/Clicker/ClickerConnected'
const renderTicker = () => <FrequencyConnected />
// const renderTicker = () => <ClickerConnected />
const renderResources = () => <ResourcesBar />
const renderLeftPanel = () => <LeftPanel />
const renderFactoryGrid = () => <FactoryGrid />
const renderDetail = machine => () => (machine ? <Detail /> : null)
const renderNavBar = () => <Navbar />

const game = ({ machineSelected, gameId }) => {
  if (!gameId) {
    return <Redirect to="/" />
  }
  return (
    <Game
      renderNavBar={renderNavBar}
      renderTicker={renderTicker}
      renderResources={renderResources}
      renderLeftPanel={renderLeftPanel}
      renderFactoryGrid={renderFactoryGrid}
      renderDetail={renderDetail(machineSelected)}
    />
  )
}

export default withRouter(GameConnector(game))
