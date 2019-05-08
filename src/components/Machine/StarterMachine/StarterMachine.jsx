import React, { Component } from 'react'
import Popper from '@material-ui/core/Popper'
import Fade from '@material-ui/core/Fade'
import Paper from '@material-ui/core/Paper'
import '../Machine.css'
import './StarterMachine.css'
import { Button } from '@material-ui/core'
import { starterMachine as machine, areEquals, materials } from '../../Game/Game.constants'

class StarterMachine extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
      materialSelected: materials[0],
    }
  }

  contentRef = React.createRef()

  updateSelection = () => {
    const { materialSelected } = this.state
    const { selectStarter } = this.props
    selectStarter(machine, materialSelected)
  }

  onClick = () => {
    this.setState(state => ({ ...state, open: !state.open }))
  }

  onMaterialSelected = material => () => {
    this.setState(() => ({ open: false, materialSelected: material }), this.updateSelection)
  }

  render = () => {
    const { machineSelected } = this.props
    const { open, materialSelected } = this.state
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
                <div
                  component_name={`material_selector_${machine.id}`}
                  className="MaterialSelector"
                >
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