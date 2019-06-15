import React, { Component } from 'react'
import { Button } from '@material-ui/core'
import '../Machine.css'
import './Option.css'
import { crafterMachine as machine } from '../../Game/machine.constants'
import MachineWithSelector from '../MachineWithSelector/MachineWithSelector'
import connector from './MachineOptionConnector'
import { recipes } from '../../Game/recipe.constants'

class CrafterMachineOption extends Component {
  updateSelection = recipeSelected => {
    const { selectMachine } = this.props
    const copyRecipeSelected = JSON.parse(JSON.stringify(recipeSelected))
    copyRecipeSelected.necessaryMaterials.forEach(elem => {
      delete elem.material.image
    })
    delete copyRecipeSelected.result.material.image
    selectMachine({
      ...machine,
      metadata: { recipeSelected: copyRecipeSelected, availableRecipes: [copyRecipeSelected] },
    })
  }

  renderItems = (recipeSelected, onItemSelected) =>
    recipes.map(recipe => (
      <div
        key={recipe.name}
        className={recipeSelected === recipe ? 'recipeOptionSelected' : 'recipeOption'}
      >
        <Button className="recipeButton" onClick={() => onItemSelected(recipe)}>
          <div className="recipeFont">
            {recipe.necessaryMaterials.map(m => (
              <span key={m.material.name} className="recipeMaterial">
                {` ${m.quantity} x ${m.material.name}`}
                <img className="materialImg" src={m.material.image} alt="myMaterialImg" />
              </span>
            ))}
            <span className="recipeMaterial">
              {` = ${recipe.result.quantity} x ${recipe.result.material.name}`}
              <img className="materialImg" src={recipe.result.material.image} alt="myMaterialImg" />
            </span>
          </div>
        </Button>
      </div>
    ))

  render = () => {
    const { machineTypeSelected, currency } = this.props
    return (
      <MachineWithSelector
        machineTypeSelected={machineTypeSelected}
        list={recipes}
        machine={machine}
        renderItems={this.renderItems}
        updateSelection={this.updateSelection}
        currency={currency}
      />
    )
  }
}

export default connector(CrafterMachineOption)
