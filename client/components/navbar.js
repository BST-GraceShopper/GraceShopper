import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link, useHistory} from 'react-router-dom'
import {logout} from '../store'
import Paper from '@material-ui/core/Paper'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Toolbar from '@material-ui/core/Toolbar'

const Navbar = ({handleClick, isLoggedIn}) => {
  // <div>
  //   <h1>BOILERMAKER</h1>
  //   <nav>
  //     {isLoggedIn ? (
  //       <div>
  //         {/* The navbar will show these links after you log in */}
  //         <Link to="/home">Home</Link>
  //         <a href="#" onClick={handleClick}>
  //           Logout
  //         </a>
  //       </div>
  //     ) : (
  //       <div>
  //         {/* The navbar will show these links before you log in */}
  //         <Link to="/login">Login</Link>
  //         <Link to="/signup">Sign Up</Link>
  //       </div>
  //     )}
  //   </nav>
  //   <hr />
  // </div>
  const history = useHistory()
  const [value, setValue] = React.useState()

  const handleChange = (event, newValue) => {
    history.push(newValue)
  }
  return (
    <div>
      <Toolbar component="nav" variant="dense">
        <h1 className="title">Grace Shopper</h1>
      </Toolbar>
      <Paper square style={{margin: '0px 0px 50px'}}>
        <Tabs
          value={history.location.pathname}
          indicatorColor="primary"
          textColor="primary"
          onChange={handleChange}
          aria-label="disabled tabs example"
          style={{display: 'flex', alignItems: 'center'}}
        >
          <Tab value="/login" label="Log In" />
          <Tab value="/signup" label="Sign Up" />
        </Tabs>
      </Paper>
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
