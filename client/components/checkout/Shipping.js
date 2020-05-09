/* eslint-disable react/jsx-key */
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Typography} from '@material-ui/core'

const Shipping = ({}) => {
  return <Typography>Shipping</Typography>
}

const mapStateToProps = ({wines, user, cart}) => {
  return {wines, cart, user}
}
// const mapDispatchToProps = dispatch => {
//   return {
//     checkout(id) {
//       console.log('checkout', id)
//       dispatch(checkout(id))
//     }
//   }
// }
export default connect(mapStateToProps)(Shipping)
