/* eslint-disable react/jsx-key */
import React, {Component} from 'react'
import {connect} from 'react-redux'
import Paper from '@material-ui/core/Paper'
import {
  CardMedia,
  Card,
  Button,
  CardActions,
  IconButton,
  ButtonBase,
  Grid
} from '@material-ui/core/'
import CardContent from '@material-ui/core/CardContent'
import {Typography} from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import {checkout} from '../store'

class Checkout extends Component {
  render() {
    const {user} = this.props
    const token = window.localStorage.getItem('guestToken')
    return <div style={{color: 'white'}}>Thank you for your order!!!</div>
  }
}

const mapStateToProps = ({wines, user, cart}) => {
  return {wines, cart, user}
}
const mapDispatchToProps = dispatch => {
  return {
    checkout(id) {
      console.log('checkout', id)
      dispatch(checkout(id))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Checkout)
