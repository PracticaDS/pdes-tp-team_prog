import React from 'react'
import './FactoryGrid.css'
import Block from '../FactoryBlock/Block'

// eslint-disable-next-line react/prop-types
const FactoryGrid = ({ componenets }) => (
  <div className="FactoryGrid">
    {componenets.map((RowComponent, Rindex) => (
      <div key={Rindex} className="FactoryRow">
        {RowComponent.map((Machine, CIndex) => (
          <Block key={CIndex} position={{ row: Rindex, column: CIndex }} MachineNode={Machine} />
        ))}
      </div>
    ))}
  </div>
)

export default FactoryGrid
