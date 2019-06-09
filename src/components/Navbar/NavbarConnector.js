/* eslint-disable react/jsx-filename-extension */
import React from 'react'
import { connect } from 'react-redux'
import { Redirect, withRouter } from 'react-router-dom'
import { getUser } from '../../selectors/User'

const connector = Navbar => {
  const mapStateToProps = state => ({
    user: getUser(state),
    gameName: 'Game name',
    onClick: () => <Redirect to="/home" />,
  })

  return withRouter(connect(mapStateToProps)(Navbar))
}

export default connector
