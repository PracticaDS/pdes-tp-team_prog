import React from 'react'
import './FactoryGrid.css'

// eslint-disable-next-line react/prop-types
const FactoryGrid = ({ componenets }) => (
  <div className="FactoryGrid">
    {componenets.map((RowComponents, Rindex) => (
      <div key={Rindex} className="FactoryRow">
        {RowComponents.map((Component, CIndex) => (
          <Component position={{ row: Rindex, column: CIndex }} key={CIndex} />
        ))}
      </div>
    ))}
  </div>
)

export default FactoryGrid
