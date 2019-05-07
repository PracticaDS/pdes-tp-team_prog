import React from 'react'
import './Clicker.css'
import Button from '../../../../node_modules/@material-ui/core/Button/Button'
import Grid from '../../../../node_modules/@material-ui/core/Grid/Grid'

// const Clicker = ({ tick }) => <div className="clicker" onClick={tick} />
const Clicker = ({ tick }) => (
  <Grid container spacing={8} justify="center" alignItems="center" direction="row">
    <Grid item xs={1}>
      <Button
        component_name="clicker"
        variant="contained"
        color="primary"
        className="clicker"
        onClick={tick}
      >
        tick
      </Button>
    </Grid>
  </Grid>
)

export default Clicker
