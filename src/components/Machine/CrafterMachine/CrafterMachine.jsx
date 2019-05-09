import React, { Component } from 'react'
import Popper from '@material-ui/core/Popper'
import Fade from '@material-ui/core/Fade'
import Paper from '@material-ui/core/Paper'
import { Button } from '@material-ui/core'
import '../Machine.css'
import './CrafterMachine.css'
import { crafterMachine as machine, recipes } from '../../Game/Game.constants'

class CrafterMachine extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
      recipeSelected: recipes[0],
    }
  }

  contentRef = React.createRef()

  updateSelection = () => {
    const { recipeSelected } = this.state
    const { selectMachine } = this.props
    selectMachine({
      ...machine,
      metadata: { recipeSelected, availableRecipes: [recipeSelected] },
    })
  }

  onClick = () => {
    this.setState(state => ({ open: !state.open }))
  }

  onRecipeSelected = recipe => {
    this.setState(() => ({ open: false, recipeSelected: recipe }), this.updateSelection)
  }

  render = () => {
    const { machineTypeSelected } = this.props
    const { open, recipeSelected } = this.state
    return (
      <div>
        <div component_name={`machine_${machine.id}`} ref={this.contentRef} onClick={this.onClick}>
          <img
            className={machineTypeSelected === machine.type ? 'machineSelected' : 'machineElement'}
            src={machine.image}
            alt="myImage"
          />
        </div>
        <Popper
          className="Popper"
          open={open}
          anchorEl={this.contentRef.current}
          placement="right-start"
          transition
        >
          {({ TransitionProps }) => (
            <Fade {...TransitionProps}>
              <Paper>
                <div className="RecipeSelector">
                  {recipes.map(recipe => (
                    <div
                      key={recipe.name}
                      className={
                        recipeSelected === recipe ? 'recipeOptionSelected' : 'recipeOption'
                      }
                    >
                      <Button className="recipeButton" onClick={this.onRecipeSelected(recipe)}>
                        <div className="recipeFont">
                          {recipe.necessaryMaterials.map(m => (
                            <span key={m.material.name} className="recipeMaterial">
                              {` ${m.count} x ${m.material.name}`}
                              <img
                                className="materialImg"
                                src={m.material.image}
                                alt="myMaterialImg"
                              />
                            </span>
                          ))}
                          <span className="recipeMaterial">
                            {` = ${recipe.result.count} x ${recipe.result.material.name}`}
                            <img
                              className="materialImg"
                              src={recipe.result.material.image}
                              alt="myMaterialImg"
                            />
                          </span>
                        </div>
                      </Button>
                    </div>
                  ))}
                </div>
              </Paper>
            </Fade>
          )}
        </Popper>
      </div>
    )
  }
}

export default CrafterMachine
