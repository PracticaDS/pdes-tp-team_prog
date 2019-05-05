import React, { Component } from 'react'
import Popper from '@material-ui/core/Popper'
import Fade from '@material-ui/core/Fade'
import Paper from '@material-ui/core/Paper'
import '../Machine.css'
import './StarterMachine.css'
import { Button } from '@material-ui/core'
import { starterMachine as machine, areEquals, materials } from '../../Game/Game.constants'

class StarterMachine extends Component {
  state = {
    anchorEl: null,
    open: false,
    materialSelected: materials[0],
  }

  updateSelection = () => {
    const { materialSelected } = this.state
    const { selectMachine } = this.props
    selectMachine(machine(materialSelected))
  }

  onClick = event => {
    const { currentTarget } = event
    const { open } = this.state
    this.setState({
      anchorEl: currentTarget,
      open: !open,
    })
    // this.updateSelection()
  }

  onMaterialSelected = material => () => {
    const { open } = this.state
    this.setState({ materialSelected: material, open: !open })
    // this.updateSelection()
  }

  render = () => {
    const { machineSelected } = this.props
    const { open, anchorEl, materialSelected } = this.state
    const isSelected = areEquals(machineSelected, machine())
    return (
      <div>
        <div component_name={`machine_${machine().id}`} onClick={this.onClick}>
          <img
            className={isSelected ? 'machineSelected' : 'machineElement'}
            src={machine().image}
            alt="myImage"
          />
        </div>
        <Popper
          className="Popper"
          open={open}
          anchorEl={anchorEl}
          placement="right-start"
          transition
        >
          {({ TransitionProps }) => (
            <Fade {...TransitionProps}>
              <Paper>
                <div className="MaterialSelector">
                  {materials.map(material => (
                    <div
                      key={material.name}
                      className={
                        materialSelected === material ? 'materialOptionSelected' : 'materialOption'
                      }
                    >
                      <Button
                        className="materialButton"
                        onClick={this.onMaterialSelected(material)}
                      >
                        <div className="materialFont">{material.name}</div>
                        <img className="materialImg" src={material.image} alt="myMaterialImg" />
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

export default StarterMachine
