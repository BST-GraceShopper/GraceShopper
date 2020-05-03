import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {HomeHeader} from './nav'
import {Paper, Typography, AppBar, Grid, Modal} from '@material-ui/core'

/**
 * COMPONENT
 */
export const UserHome = props => {
  const {email} = props

  return (
    <div>
      <HomeHeader />
      <Typography style={{color: 'white'}} variant="h3">
        Welcome, {email}
      </Typography>
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    email: state.user.email
  }
}

export default connect(mapState)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}
