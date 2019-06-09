import React from 'react'
import { Typography, TextField, Button, Grid } from '@material-ui/core'
import { Redirect, withRouter } from 'react-router-dom'
import connector from './LoginConnector'
import { constants } from './constants'
import './Login.css'

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      input: '',
    }
  }

  onChange = ev => {
    const newInput = ev.target.value
    this.setState(() => ({
      input: newInput,
    }))
  }

  onClick = () => {
    const { login } = this.props
    const { input } = this.state

    login({ username: input })
  }

  render() {
    const { user } = this.props
    if (user && user.id) return <Redirect to="/home" />
    return (
      <div component_name="login" className="login-container">
        <Grid
          className="login-content"
          container
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Grid item xs={12}>
            <Typography className="login-title" align="center" variant="h5">
              {constants.title}
            </Typography>
          </Grid>
          <Grid item xs={6} container direction="column" alignItems="center" spacing={1}>
            <Grid item xs={6}>
              <TextField
                className="login-input"
                label={constants.label}
                placeholder={constants.placeholder}
                margin="normal"
                variant="outlined"
                fullWidth
                onChange={this.onChange}
              />
            </Grid>
            <Grid item xs={6}>
              <Button variant="contained" size="large" fullWidth onClick={this.onClick}>
                {constants.button}
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default withRouter(connector(Login))
