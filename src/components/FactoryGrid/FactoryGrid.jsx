import React from 'react'
import './FactoryGrid.css'
import connector from './FactoryGridConnector'
import Block from '../FactoryBlock/BlockConnected'
import { machineByType } from '../../utils/machineUtils'

const simpleArray = (n, m) => Array(m).fill(Array(n).fill(''))

const renderBlock = (position, renderNode) => (
  <Block key={`${position.row}_${position.column}`} position={position} renderNode={renderNode} />
)

const renderNode = node => {
  const MachineNode = machineByType[node.machine.type]
  return <MachineNode className="MachineNode" node={node} />
}

const FactoryGrid = ({ dimensions: { n, m } }) => (
  <div className="FactoryGrid">
    {simpleArray(n, m).map((RowComponent, Rindex) => (
      <div key={Rindex} className="FactoryRow">
        {RowComponent.map((node, CIndex) =>
          renderBlock({ row: Rindex, column: CIndex }, renderNode),
        )}
      </div>
    ))}
  </div>
)

export default connector(FactoryGrid)
