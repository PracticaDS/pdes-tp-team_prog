import React, { Component } from 'react'
import '../Machine.css'
import './StarterMachine.css'
import { Button } from '@material-ui/core'
import { starterMachine as machine } from '../../Game/Game.constants'
import MachineWithSelector from '../MachineWithSelector/MachineWithSelector'

class StarterMachine extends Component {
  updateSelection = materialSelected => {
    const { selectMachine } = this.props
    selectMachine({
      ...machine,
      metadata: { selectedMaterial: materialSelected, availableMaterials: [materialSelected] },
    })
  }

  renderItems = (basicMaterials, materialSelected, onItemSelected) =>
    basicMaterials.map(material => (
      <div
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
    const { machineTypeSelected, basicMaterials, currency } = this.props
    return (
      <MachineWithSelector
        machineTypeSelected={machineTypeSelected}
        list={basicMaterials}
        machine={machine}
        renderItems={this.renderItems}
        updateSelection={this.updateSelection}
        currency={currency}
      />
    )
  }
}

export default StarterMachine
