import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import AccountCircle from '@material-ui/icons/AccountCircle'
import ScheduleIcon from '@material-ui/icons/Schedule'
import MailIcon from '@material-ui/icons/Email'
import Reporticon from '@material-ui/icons/Report'

import './Navbar.css'

const WELCOME = 'Welcome'
const STATUS = {
  success: 'Game saved!',
  error: 'Game not saved!',
  default: 'No actions',
  currentStatus: 'Current Save: ',
}

const renderIcon = {
  WAITING: <ScheduleIcon className="Idle" />,
  SUCCESS: <MailIcon className="Saved" />,
  FAILURE: <Reporticon className="Error" />,
}

const Navbar = ({ user, gameName, onClick, saveState }) => (
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
        <div className="Status">
          <Typography className="GameSaveTitle" variant="h7">
            <font>{`${STATUS.currentStatus}`}</font>
          </Typography>
          {renderIcon[saveState]}
        </div>
      </Toolbar>
    </AppBar>
  </div>
)

export default Navbar
