import React from 'react'
import { Constant } from './ResourcesBar.constants'
import './ResourcesBar.css'

const ResourcesBar = ({ currency }) => (
  <div className="ResourcesBar">
    <div className="Currency">
      <font className="TitleFont">{`${Constant.currency}`}</font>
      <font className="CountFont">{`$${currency}`}</font>
    </div>
  </div>
)

export default ResourcesBar
