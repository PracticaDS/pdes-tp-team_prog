import React from 'react'
import { AppBar, Typography, Toolbar } from '@material-ui/core'
import { Constant } from './ResourcesBar.constants'
import './ResourcesBar.css'

// eslint-disable-next-line react/prop-types
const ResourcesBar = ({ currency }) => (
  <div className="ResourcesBar">
    <AppBar position="absolute" color="inherit">
      <Toolbar className="Currency">
        <Typography variant="subheading">{`${`${Constant.currency} $${currency}`}`}</Typography>
      </Toolbar>
    </AppBar>
  </div>
)

export default ResourcesBar
