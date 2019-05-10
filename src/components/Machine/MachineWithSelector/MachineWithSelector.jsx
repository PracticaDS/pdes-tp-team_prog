import React, { Component } from 'react'
import Popper from '@material-ui/core/Popper'
import Fade from '@material-ui/core/Fade'
import Paper from '@material-ui/core/Paper'
import '../Machine.css'

class MachineWithSelector extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
      itemSelected: props.list[0],
    }
  }

  contentRef = React.createRef()

  updateSelection = () => {
    const { itemSelected } = this.state
    const { updateSelection } = this.props
    updateSelection(itemSelected)
  }

  onClick = () => {
    this.setState(state => ({ open: !state.open }))
    if (!this.isSelected()) {
      this.updateSelection()
    }
  }

  isSelected = () => {
    const { machineTypeSelected, machine } = this.props
    return machineTypeSelected === machine.type
  }

  onItemSelected = recipe => {
    this.setState(() => ({ open: false, itemSelected: recipe }), this.updateSelection)
  }

  render = () => {
    const { list, renderItems, machine } = this.props
    const { open, itemSelected } = this.state
    return (
      <div>
        <div component_name={`machine_${machine.id}`} ref={this.contentRef} onClick={this.onClick}>
          <img
            className={this.isSelected() ? 'machineSelected' : 'machineElement'}
            src={machine.image}
            alt="myImage"
          />
        </div>
        <Popper
          className="Popper"
          open={open && this.isSelected()}
          anchorEl={this.contentRef.current}
          placement="right-start"
          transition
        >
          {({ TransitionProps }) => (
            <Fade {...TransitionProps}>
              <Paper>
                <div className="Selector">
                  {renderItems(list, itemSelected, this.onItemSelected)}
                </div>
              </Paper>
            </Fade>
          )}
        </Popper>
      </div>
    )
  }
}

export default MachineWithSelector
