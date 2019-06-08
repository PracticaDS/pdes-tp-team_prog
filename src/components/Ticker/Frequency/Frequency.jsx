import React, { Component } from 'react'
import './Frequency.css'

// props: tick - function
class Frequency extends Component {
  constructor(props) {
    super(props)
    this.state = {
      timer: null,
    }
  }

  componentWillMount() {
    const { tick, frequency } = this.props
    this.setState({ timer: setInterval(tick, frequency) })
  }

  componentWillReceiveProps({ onUpdate, ticks, user, game }) {
    if (ticks % 30 === 0) {
      onUpdate(user, game)
    }
  }

  componentWillUnmount() {
    const { timer } = this.state
    clearInterval(timer)
  }

  render = () => <div className="ticker" />
}

export default Frequency
