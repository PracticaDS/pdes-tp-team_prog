import React, { Component } from 'react'

import ResourcesBar from '../Resources/ResourcesConnected'
import FactoryGrid from '../FactoryGrid/FactoryGrid'
import LeftPanel from '../LeftPanel/LeftPanel'
import Detail from '../Detail/DetailConnected'

import { editionOptions } from './Game.constants'

import './Game.css'

import connector from './GameConnector'
import { TIMER_TIME } from '../../utils/defaultValues'

class Game extends Component {
  constructor(props) {
    super(props)
    this.state = {
      timer: null,
    }
  }

  componentDidMount() {
    this.initialGame()
  }

  componentWillUnmount() {
    const { timer } = this.state
    clearInterval(timer)
  }

  initialGame = () => {
    const { restartCurrency, startGame, tick } = this.props
    restartCurrency()
    startGame()
    this.setState({ timer: setInterval(tick, TIMER_TIME) })
  }

  renderDetail() {
    const { machineSelected } = this.props

    return machineSelected ? <Detail {...machineSelected} /> : null
  }

  render = () => (
    <div className="gameMainContainer">
      <ResourcesBar />
      <div className="HorizontalGameParts">
        <div className="gamePanel gameLeftPanel">
          <LeftPanel editionOptions={editionOptions} />
        </div>
        <div className="gameMidPanel">
          <FactoryGrid />
        </div>
        <div className="gamePanel gameRightPanel" component_name="game-right-panel">
          {this.renderDetail()}
        </div>
      </div>
    </div>
  )
}

export default connector(Game)
