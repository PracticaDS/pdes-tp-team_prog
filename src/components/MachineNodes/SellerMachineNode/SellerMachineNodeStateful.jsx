import React from 'react'
import connector from './SellerMachineNodeConnector'
import { activateNode, deactivate, incrementCount, isFrequencyFinished } from '../utils'
import SellerMachineNode from './SellerMachineNode'

class SellerMachineNodeStateful extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      personalCount: 0,
      isActive: false,
    }
  }

  componentWillReceiveProps({ tick: nextTick }) {
    const { tick } = this.props

    if (nextTick !== tick) {
      if (isFrequencyFinished(this.props, this.state)) {
        const { node } = this.props
        const { items } = node
        const values = Object.values(items)
        if (values.length > 0) {
          const { deleteItems, incrementCurrency } = this.props
          const { position } = node
          const currencies = values.map(v => v.price * v.quantity)
          const addedCurrency = currencies.reduce((acc, val) => acc + val, 0)

          this.setState(activateNode, () => {
            deleteItems(position, values)
            incrementCurrency(addedCurrency)
          })
        }
      } else {
        this.setState(incrementCount)
        this.setState(deactivate)
      }
    }
  }

  render() {
    const { isActive } = this.state
    const { isUpdating } = this.props
    return <SellerMachineNode isActive={isActive && isUpdating} />
  }
}

export default connector(SellerMachineNodeStateful)
