/* eslint-disable react/prop-types */
import React, { Component } from 'react'

import ResourcesBar from '../Resources/ResourcesBar'
import EmptyMachineNode from '../MachineNodes/EmptyMachineNode/EmptyMachineNode'
import FactoryGrid from '../FactoryGrid/FactoryGrid'
import LeftPanel from '../LeftPanel/LeftPanel'
import Detail from '../Detail/Detail'

import { machineTypes, editionOptions } from './Game.constants'

import './Game.css'

import connector from './GameConnector'
import { TIMER_TIME } from '../../utils/defaultValues'

const initializeBlocks = (n, m) => Array(m).fill(Array(n).fill(EmptyMachineNode))

class Game extends Component {
  constructor(props) {
    super(props)
    const { dimensions } = props
    const { n, m } = dimensions
    this.state = {
      currentBlocks: initializeBlocks(n, m),
      timer: null,
    }
  }

  componentDidMount() {
    this.initialGame()
  }

  componentWillUnmount = () => {
    const { timer } = this.state
    clearInterval(timer)
  }

  initialGame = () => {
    const { restartCurrency, startGame, tick } = this.props
    restartCurrency()
    startGame()
    this.setState({ timer: setInterval(tick, TIMER_TIME) })
  }

  render = () => {
    const { currentBlocks } = this.state
    return (
      <div className="gameMainContainer">
        <ResourcesBar />
        <div className="HorizontalGameParts">
          <div className="gamePanel gameLeftPanel">
            <LeftPanel machineTypes={machineTypes} editionOptions={editionOptions} />
          </div>
          <div className="gameMidPanel">
            <FactoryGrid componenets={currentBlocks} />
          </div>
          <div className="gamePanel gameRightPanel">
            <Detail />
          </div>
        </div>
      </div>
    )
  }
}

export default connector(Game)
