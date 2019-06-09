import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import AccountCircle from '@material-ui/icons/AccountCircle'

import './Navbar.css'

const WELCOME = 'Welcome'

const Navbar = ({ user, gameName, onClick }) => (
  <div className="Navbar">
    <AppBar className="Navbar" position="static">
      <Toolbar>
        <div>
          <IconButton
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={onClick}
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
        </div>
        <Typography variant="h6" className="Title">
          <font>{`${WELCOME} ${user.username} `}</font>
          <font>{`- ${gameName}`}</font>
        </Typography>
      </Toolbar>
    </AppBar>
  </div>
)

export default Navbar
