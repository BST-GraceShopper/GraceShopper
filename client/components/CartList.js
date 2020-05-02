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
import {removeFromCart} from '../store/'

const CartList = ({cart, user, removeFromCart}) => {
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
      {cart.items.map(cartItem => {
        return (
          <Grid
            container
            spacing={2}
            style={{border: '1px gray solid'}}
            key={cartItem.id}
          >
            <Grid item>
              <img
                alt="complex"
                src={cartItem.image}
                style={{
                  margin: 'auto',
                  display: 'block',
                  maxWidth: 150,
                  maxHeight: 150
                }}
              />
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography
                    gutterBottom
                    color="textSecondary"
                    variant="subtitle1"
                  >
                    {cartItem.name}
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    {cartItem.maker}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {cartItem.quantity}
                  </Typography>
                </Grid>
                <ButtonBase
                  onClick={() => removeFromCart(user.id, cartItem.id)}
                >
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    // style={{cursor: 'pointer'}}
                  >
                    Remove
                  </Typography>
                </ButtonBase>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1" color="textSecondary">
                  ${cartItem.price}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        )
      })}
    </Paper>
  )
}

const mapStateToProps = ({wines, user, cart}) => {
  return {wines, user, cart}
}
const mapDispatchToProps = dispatch => {
  return {
    removeFromCart(userId, productId) {
      dispatch(removeFromCart(userId, productId))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(CartList)
