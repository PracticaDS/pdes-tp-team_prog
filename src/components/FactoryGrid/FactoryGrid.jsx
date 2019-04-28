import React from 'react'
import './FactoryGrid.css'
import connector from './FactoryGridConnector'
import Block from '../FactoryBlock/Block'

const simpleArray = (n, m) => Array(m).fill(Array(n).fill(''))

const FactoryGrid = ({ dimensions: { n, m } }) => (
  <div className="FactoryGrid">
    {simpleArray(n, m).map((RowComponent, Rindex) => (
      <div key={Rindex} className="FactoryRow">
        {RowComponent.map((node, CIndex) => (
          <Block key={CIndex} position={{ row: Rindex, column: CIndex }} />
        ))}
      </div>
    ))}
  </div>
)

export default connector(FactoryGrid)
