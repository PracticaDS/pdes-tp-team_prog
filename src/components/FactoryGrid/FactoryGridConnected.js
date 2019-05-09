import React from 'react'
import FactoryGrid from './FactoryGrid'
import FactoryConnector from './FactoryGridConnector'
import { machineByType } from '../../utils/machineUtils'
import Block from '../FactoryBlock/BlockConnected'

const renderNode = node => {
  const MachineNode = machineByType[node.machine.type]
  return <MachineNode className="MachineNode" node={node} />
}

const renderBlock = position => (
  <Block key={`${position.row}_${position.column}`} position={position} renderNode={renderNode} />
)

const factoryGrid = props => <FactoryGrid {...props} renderBlock={renderBlock} />

export default FactoryConnector(factoryGrid)
