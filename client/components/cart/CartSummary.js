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

class CartSummary extends Component {
  componentDidMount() {
    // const {items,totalPrice,totalQuantity} = this.props.cart
    console.log(this.props.cart)
  }
  render() {
    const {totalQuantity, totalPrice} = this.props.cart
    return (
      <Paper
        style={{
          // border:'1px gray solid',
          backgroundColor: 'black',
          padding: 10,
          margin: 20,
          maxWidth: 500
        }}
      >
        <Typography>Total Quantity = {totalPrice}</Typography>
        <Typography color="textSecondary">
          Total Cost = ${totalPrice}
        </Typography>
        <Typography color="textSecondary">
          Tax: = ${totalPrice * 0.05}
        </Typography>
        <Typography color="textSecondary">Shipping: = $5.00</Typography>
        <Typography color="textSecondary">
          Grand Total: = ${totalPrice + totalPrice * 0.05 + 5}
        </Typography>
      </Paper>
    )
  }
}

const mapStateToProps = ({wines, user, cart}) => {
  return {wines, cart}
}
const mapDispatchToProps = dispatch => {
  return {
    loadWines() {
      dispatch(getWines())
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(CartSummary)
