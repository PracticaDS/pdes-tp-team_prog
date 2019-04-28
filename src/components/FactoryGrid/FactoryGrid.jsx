import React from 'react'
import './FactoryGrid.css'
import connector from './FactoryGridConnector'
import Block from '../FactoryBlock/Block'

// eslint-disable-next-line react/prop-types
const FactoryGrid = ({ currentNodes }) => (
  <div className="FactoryGrid">
    {currentNodes.map((RowComponent, Rindex) => (
      <div key={Rindex} className="FactoryRow">
        {RowComponent.map((node, CIndex) => (
          <Block key={CIndex} position={{ row: Rindex, column: CIndex }} node={node} />
        ))}
      </div>
    ))}
  </div>
)

export default connector(FactoryGrid)
