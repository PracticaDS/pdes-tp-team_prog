import React from 'react'
import './FactoryGrid.css'

const simpleArray = (n, m) => Array(m).fill(Array(n).fill(''))

const FactoryGrid = ({ dimensions: { n, m }, renderBlock }) => (
  <div className="FactoryGrid">
    {simpleArray(n, m).map((RowComponent, Rindex) => (
      <div key={Rindex} className="FactoryRow">
        {RowComponent.map((node, CIndex) => renderBlock({ row: Rindex, column: CIndex }))}
      </div>
    ))}
  </div>
)

export default FactoryGrid
