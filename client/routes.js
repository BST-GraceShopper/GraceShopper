import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch} from 'react-router-dom'
import PropTypes from 'prop-types'
import {Login, UserHome} from './components'
import {me} from './store'
import Home from './components/home.js'
import Wine from './components/wine.js'
import Beer from './components/beer.js'
import Spirits from './components/spirits.js'
import Cart from './components/cart.js'
import LogOut from './components/logout.js'
import ThankYou from './components/ThankYou.js'
// import {Signup} from './components'

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData()
  }

  render() {
    const {isLoggedIn} = this.props

    return (
      <Switch>
        {/* Routes placed here are available to all visitors */}
        {/* <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} /> */}
        <Route exact path="/" component={Home} />
        <Route path="/wine" component={Wine} />
        <Route path="/beer" component={Beer} />
        <Route path="/spirits" component={Spirits} />
        <Route path="/cart" component={Cart} />
        <Route path="/thankyou" component={ThankYou} />

        {isLoggedIn && (
          <Switch>
            {/* Routes placed here are only available after logging in */}
            <Route exact path="/" component={UserHome} />
            <Route path="/cart" component={Cart} />
            <Route path="/logout" component={LogOut} />
            <Route path="/thankyou" component={ThankYou} />
          </Switch>
        )}
        {/* Displays our Login component as a fallback */}
        <Route exact path="/" component={Home} />
      </Switch>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.user that has a truthy id.
    // Otherwise, state.user will be an empty object, and state.user.id will be falsey
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    loadInitialData() {
      dispatch(me())
    }
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes))

/**
 * PROP TYPES
 */
Routes.propTypes = {
  loadInitialData: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
