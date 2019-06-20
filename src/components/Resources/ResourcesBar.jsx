import React from 'react'
import { Constant } from './ResourcesBar.constants'
import './ResourcesBar.css'

const ResourcesBar = ({ currency }) => (
  <div component_name="resource-bar" className="ResourcesBar">
    <div className="Currency">
      <font component_name="resource-bar-title" className="TitleFont">
        {`${Constant.currency}`}
      </font>
      <font component_name="resource-bar-currency" className="CountFont">{`$${currency}`}</font>
    </div>
  </div>
)

export default ResourcesBar
