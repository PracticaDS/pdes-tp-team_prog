import React, { Component } from 'react'
import Popper from '@material-ui/core/Popper'
import Fade from '@material-ui/core/Fade'
import Paper from '@material-ui/core/Paper'
import '../Machine.css'
import './StarterMachine.css'
import { Button } from '@material-ui/core'
import { starterMachine as machine } from '../../Game/Game.constants'

class StarterMachine extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
      materialSelected: props.basicMaterials[0],
    }
  }

  contentRef = React.createRef()

  updateSelection = () => {
    const { materialSelected } = this.state
    const { selectMachine } = this.props
    selectMachine({
      ...machine,
      metadata: { selectedMaterial: materialSelected, availableMaterials: [materialSelected] },
    })
  }

  onClick = () => {
    this.setState(state => ({ open: !state.open }), this.updateSelection)
  }

  onMaterialSelected = material => () => {
    this.setState(() => ({ open: false, materialSelected: material }), this.updateSelection)
  }

  render = () => {
    const { open, materialSelected } = this.state
    const { machineTypeSelected, basicMaterials } = this.props
    const isSelected = machineTypeSelected === machine.type
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
          open={open && isSelected}
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
                  {basicMaterials.map(material => (
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
