import React, { Component } from 'react'

import ResourcesBar from '../Resources/ResourcesBar'
import FactoryGrid from '../FactoryGrid/FactoryGrid'
import LeftPanel from '../LeftPanel/LeftPanel'
import Detail from '../Detail/Detail'

import { machines, editionOptions } from './Game.constants'

import './Game.css'

import connector from './GameConnector'
// import { TIMER_TIME } from '../../utils/defaultValues'

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
    const { restartCurrency, startGame } = this.props
    restartCurrency()
    startGame()
    // this.setState({ timer: setInterval(tick, TIMER_TIME) })
  }

  renderDetail() {
    const { machineSelected } = this.props

    if (machineSelected && machineSelected.type === 'machine')
      return <Detail {...machineSelected} />
    return null
  }

  render = () => (
    <div className="gameMainContainer">
      <ResourcesBar />
      <div className="HorizontalGameParts">
        <div className="gamePanel gameLeftPanel">
          <LeftPanel machineTypes={machines} editionOptions={editionOptions} />
        </div>
        <div className="gameMidPanel">
          <FactoryGrid />
        </div>
        <div className="gamePanel gameRightPanel">{this.renderDetail()}</div>
      </div>
    </div>
  )
}

export default connector(Game)
