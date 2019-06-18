import React from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import { constants } from './constants'

function createGame({ isOpen, onCreate }) {
  const [open, setOpen] = React.useState(isOpen || false)
  const [name, setName] = React.useState('')

  function handleClickOpen() {
    setOpen(true)
  }

  function handleClose() {
    setOpen(false)
  }

  function handleName(event) {
    const { value } = event.target
    setName(value)
  }

  function handleOnCreate() {
    onCreate({ name })
  }

  return (
    <div component_name="create-game">
      <Button
        component_name="create-game-open-button"
        className="new-game-button"
        color="primary"
        variant="contained"
        size="large"
        onClick={handleClickOpen}
      >
        {constants.new_game}
      </Button>
      <Dialog
        component_name="create-game-dialog"
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">{constants.new_game}</DialogTitle>
        <DialogContent>
          <TextField
            component_name="create-game-input"
            margin="dense"
            id="game_name"
            label={constants.game_label}
            type="text"
            placeholder={constants.game_label}
            onChange={handleName}
            fullWidth
            required
          />
        </DialogContent>
        <DialogActions>
          <Button component_name="create-game-cancel-button" onClick={handleClose} color="primary">
            {constants.cancel}
          </Button>
          <Button
            component_name="create-game-create-button"
            onClick={handleOnCreate}
            color="primary"
            disabled={name === ''}
          >
            {constants.create}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default createGame
