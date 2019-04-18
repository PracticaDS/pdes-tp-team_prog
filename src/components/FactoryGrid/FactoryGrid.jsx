import React from 'react'
import './FactoryGrid.css'

// eslint-disable-next-line react/prop-types
const FactoryGrid = ({ componenets }) => (
  <div className="FactoryGrid">
    {componenets.map((RowComponent, Rindex) => (
      <div key={Rindex} className="FactoryRow">
        {RowComponent.map((Component, CIndex) => (
          <Component key={CIndex} position={{ row: Rindex, column: CIndex }} />
        ))}
      </div>
    ))}
  </div>
)

export default FactoryGrid
