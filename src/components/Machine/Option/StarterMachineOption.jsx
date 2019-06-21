import React, { Component } from 'react'
import '../Machine.css'
import { Button } from '@material-ui/core'
import { starterMachine as machine } from '../../Game/machine.constants'
import MachineWithSelector from '../MachineWithSelector/MachineWithSelector'
import './Option.css'
import connector from './MachineOptionConnector'
import { materials } from '../../Game/material.constants'

class StarterMachineOption extends Component {
  updateSelection = materialSelected => {
    const { selectMachine } = this.props
    const copyMaterialSelected = { ...materialSelected }
    delete copyMaterialSelected.image
    selectMachine({
      ...machine,
      metadata: {
        selectedMaterial: copyMaterialSelected,
        availableMaterials: [copyMaterialSelected],
      },
    })
  }

  renderItems = (items, materialSelected, onItemSelected) =>
    items.map((material, index) => (
      <div
        component_name={`item-${index}`}
        key={material.name}
        className={materialSelected === material ? 'materialOptionSelected' : 'materialOption'}
      >
        <Button className="materialButton" onClick={() => onItemSelected(material)}>
          <div className="materialFont">{material.name}</div>
          <img className="materialImg" src={material.image} alt="myMaterialImg" />
        </Button>
      </div>
    ))

  render = () => {
    const { machineTypeSelected, currency } = this.props
    return (
      <MachineWithSelector
        machineTypeSelected={machineTypeSelected}
        list={materials}
        machine={machine}
        renderItems={this.renderItems}
        updateSelection={this.updateSelection}
        currency={currency}
      />
    )
  }
}

export default connector(StarterMachineOption)
