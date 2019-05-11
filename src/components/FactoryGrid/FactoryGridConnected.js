/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-filename-extension */
import React from 'react'
import FactoryGrid from './FactoryGrid'
import FactoryConnector from './FactoryGridConnector'
import { machineByType } from '../../utils/machineUtils'
import Block from '../FactoryBlock/BlockConnected'
import { materialsImg } from '../Game/Game.constants'
import './FactoryGrid.css'

const DEFAULT = 'DEFAULT'

const renderNode = node => {
  const { machine, items } = node
  const keys = Object.keys(items)
  const materialImg =
    keys.length === 1 ? materialsImg[keys[0]] : keys.length > 1 ? materialsImg[DEFAULT] : null
  const MachineNode = machineByType[machine.type]
  return (
    <div className="Node">
      <MachineNode className="MachineNode" node={node} />
      {materialImg && (
        <figure>
          <img className="Material" src={materialImg} alt="material" />
        </figure>
      )}
    </div>
  )
}

const renderBlock = position => (
  <Block key={`${position.row}_${position.column}`} position={position} renderNode={renderNode} />
)

const factoryGrid = props => <FactoryGrid {...props} renderBlock={renderBlock} />

export default FactoryConnector(factoryGrid)
