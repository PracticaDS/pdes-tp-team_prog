import React from 'react'
import seller from '../../../assets/machines/seller.png'
import sellerActive from '../../../assets/machines/seller-active.png'
import MachineNode from './MachineNode'
import { deleteItems } from '../../../actions/Grid'
import connector from './MachineNodeConnector'
import { incrementCurrency } from '../../../actions/Currency'

const run = props => {
  const { node } = props
  const { position, items } = node
  const values = Object.values(items)
  const actions = []
  if (values.length > 0) {
    const currencies = values.map(v => v.price * v.quantity)
    const addedCurrency = currencies.reduce((acc, val) => acc + val, 0)

    const incrementCurrencyAction = incrementCurrency(addedCurrency)
    const deleteItemsAction = deleteItems(position, values)
    actions.push(incrementCurrencyAction)
    actions.push(deleteItemsAction)
  }
  return actions
}

const SellerMachineNode = props => (
  <MachineNode {...props} activeImg={sellerActive} nonActiveImg={seller} run={run} />
)

export default connector(SellerMachineNode)
