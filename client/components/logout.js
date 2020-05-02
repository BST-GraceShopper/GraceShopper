import React from 'react'
import {connect} from 'react-redux'
import {Link, useHistory} from 'react-router-dom'
import {Paper, Typography, AppBar, Grid, Modal} from '@material-ui/core'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import {Login, Signup} from './auth-form'
// const spiritImage = require('./public/images/spirits.jpg')
// const beerImage = require('./public/images/beer.jpg')
// const wineImage = require('..../public/images/wine.jpg')
import {HomeHeader} from './nav'
import {logout} from '../store/'

const LogOut = props => {
  props.logOut()
  return (
    <Typography style={{color: 'white'}} variant="h3">
      Log out page
    </Typography>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    logOut() {
      dispatch(logout())
    }
  }
}

export default connect(null, mapDispatchToProps)(LogOut)
