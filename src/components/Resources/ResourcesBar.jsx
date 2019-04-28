import React from 'react'
import { Constant } from './ResourcesBar.constants'
import connector from './ResourcesConnector'
import './ResourcesBar.css'

const ResourcesBar = ({ currency }) => (
  <div className="ResourcesBar">
    <div className="Currency">
      <font className="TitleFont">{`${Constant.currency}`}</font>
      <font className="CountFont">{`$${currency}`}</font>
    </div>
  </div>
)

export default connector(ResourcesBar)
