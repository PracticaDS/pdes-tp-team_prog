import React from 'react'
import Game from './Game'
import GameConnector from './GameConnector'
import FrequencyConnected from '../Ticker/Frequency/FrequencyConnected'
import ResourcesBar from '../Resources/ResourcesConnected'
// import { machineSelected } from '../../selectors/GameState'
import LeftPanel from '../LeftPanel/LeftPanel'
import FactoryGrid from '../FactoryGrid/FactoryGridConnected'
import Detail from '../Detail/DetailConnected'
// import ClickerConnected from '../Ticker/Clicker/ClickerConnected'
const renderTicker = () => <FrequencyConnected />
// const renderTicker = () => <ClickerConnected />
const renderResources = () => <ResourcesBar />
const renderLeftPanel = () => <LeftPanel />
const renderFactoryGrid = () => <FactoryGrid />
const renderDetail = machine => () => (machine ? <Detail /> : null)

const game = ({ machineSelected }) => (
  <Game
    renderTicker={renderTicker}
    renderResources={renderResources}
    renderLeftPanel={renderLeftPanel}
    renderFactoryGrid={renderFactoryGrid}
    renderDetail={renderDetail(machineSelected)}
  />
)

export default GameConnector(game)
