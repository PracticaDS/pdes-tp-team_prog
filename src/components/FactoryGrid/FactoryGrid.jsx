import React from 'react'
import './FactoryGrid.css'

// eslint-disable-next-line react/prop-types
const FactoryGrid = ({ componenets }) => (
  <div className="FactoryGrid">
    <div className="FactoryRows">
      {componenets.map((ColumnsComponents, Rindex) => (
        <div key={Rindex} className="FactoryColumns">
          {ColumnsComponents.map((Component, CIndex) => (
            <Component position={{ row: Rindex, column: CIndex }} key={CIndex} />
          ))}
        </div>
      ))}
    </div>
  </div>
)

export default FactoryGrid
