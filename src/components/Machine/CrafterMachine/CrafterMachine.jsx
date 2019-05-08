import React, { Component } from 'react'
import Popper from '@material-ui/core/Popper'
import Fade from '@material-ui/core/Fade'
import Paper from '@material-ui/core/Paper'
import { Button } from '@material-ui/core'
import '../Machine.css'
import { crafterMachine as machine, areEquals, recipes } from '../../Game/Game.constants'

class CrafterMachine extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
      recipeSelected: recipes[0],
    }
  }

  contentRef = React.createRef()

  render = () => {
    const { machineSelected } = this.props
    const { open, recipeSelected } = this.state
    const isSelected = areEquals(machineSelected, machine)
    return (
      <div>
        <div component_name={`machine_${machine.id}`} ref={this.contentRef} onClick={this.onClick}>
          <img
            className={isSelected ? 'machineSelected' : 'machineElement'}
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
                        <div className="recipeFont">{recipe.name}</div>
                        <img className="materialImg" src={recipe.image} alt="myMaterialImg" />
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