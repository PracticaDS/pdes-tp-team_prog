import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import { Constant } from './ResourcesBar.constants'
import './ResourcesBar.css'

// eslint-disable-next-line react/prop-types
const ResourcesBar = ({ currency }) => (
  <div className="ResourcesBar">
    <AppBar position="static" color="default">
      <Toolbar variant="dense">
        <Typography variant="h6" color="inherit">
          {`${`${Constant.currency}: ${currency}`}`}
        </Typography>
      </Toolbar>
    </AppBar>
  </div>
)

export default ResourcesBar
