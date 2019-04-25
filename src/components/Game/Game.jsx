/* eslint-disable react/prop-types */
import React, { Component } from 'react'
import ResourcesBar from '../Resources/ResourcesBar'
import MachineTypes from '../MachineTypes/MachineTypes'
import EmptyMachineNode from '../MachineNodes/EmptyMachineNode/EmptyMachineNode'
import FactoryGrid from '../FactoryGrid/FactoryGrid'
import { machineTypes } from './Game.constants'
import connector from './GameConnector'
import { TIMER_TIME } from '../../utils/defaultValues'
import './Game.css'

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
    this.initialGame()
  }

  componentWillUnmount = () => {
    const { timer } = this.state
    this.clearInterval(timer)
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
      <div className="Game">
        <ResourcesBar />
        <div className="HorizontalGameParts">
          <MachineTypes elements={machineTypes} />
          <FactoryGrid componenets={currentBlocks} />
          <MachineTypes elements={[]} /> {/* TODO: we need change this component */}
        </div>
      </div>
    )
  }
}

export default connector(Game)
