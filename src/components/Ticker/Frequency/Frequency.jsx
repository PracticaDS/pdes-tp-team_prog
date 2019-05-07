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

  componentWillUnmount() {
    const { timer } = this.state
    clearInterval(timer)
  }

  render = () => <div className="ticker" />
}

export default Frequency
