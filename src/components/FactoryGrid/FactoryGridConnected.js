/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-filename-extension */
import React from 'react'
import FactoryGrid from './FactoryGrid'
import FactoryConnector from './FactoryGridConnector'
import { machineByType } from '../../utils/machineUtils'
import Block from '../FactoryBlock/BlockConnected'
import { materialsImg } from '../Game/material.constants'
import './FactoryGrid.css'

const DEFAULT = 'DEFAULT'

const renderNode = node => {
  const { machine, items } = node
  let materialImg = null
  if (items) {
    const keys = Object.keys(items)
    materialImg =
      keys.length === 1 ? materialsImg[keys[0]] : keys.length > 1 ? materialsImg[DEFAULT] : null
  }
  const MachineNode = machineByType[machine.type]
  return (
    <div className="Node">
      <MachineNode className="MachineNode" node={node} />
      {materialImg && (
        <span className="MaterialSpan">
          <img className="Material" src={materialImg} alt="material" />
        </span>
      )}
    </div>
  )
}

const renderBlock = position => (
  <Block key={`${position.row}_${position.column}`} position={position} renderNode={renderNode} />
)

const factoryGrid = ({ dimensions }) => (
  <FactoryGrid dimensions={dimensions} renderBlock={renderBlock} />
)

export default FactoryConnector(factoryGrid)
