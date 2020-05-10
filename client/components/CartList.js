/* eslint-disable no-unused-expressions */
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
import RemoveIcon from '@material-ui/icons/Remove'
import {removeFromCart, addToCart, removeProductFromCart} from '../store/'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TablePagination from '@material-ui/core/TablePagination'
import TableRow from '@material-ui/core/TableRow'
import TableFooter from '@material-ui/core/TableFooter'
import CloseIcon from '@material-ui/icons/Close'

import TableSortLabel from '@material-ui/core/TableSortLabel'

const CartList = ({
  cart,
  user,
  removeFromCart,
  addToCart,
  removeProductFromCart
}) => {
  const headCells = [
    {id: 'item', numeric: false, disablePadding: true, label: 'Item'},
    {id: 'quantity', numeric: true, disablePadding: false, label: 'Quantity'},
    {id: 'price', numeric: true, disablePadding: false, label: 'Price'}
  ]

  const token = window.localStorage.getItem('guestToken')
  return (
    <Table style={{border: '1px solid black'}}>
      <TableHead>
        <TableRow style={{border: '1px solid black'}}>
          {['Item', 'Quantity', 'Price'].map(item => {
            return (
              <TableCell key={item}>
                <Typography
                  gutterBottom
                  color="textSecondary"
                  variant="subtitle1"
                >
                  {item}
                </Typography>
              </TableCell>
            )
          })}
        </TableRow>
      </TableHead>
      <TableBody>
        {cart.items.map(cartItem => {
          return (
            <TableRow
              key={cartItem.productId}
              style={{border: '1px solid black'}}
            >
              <TableCell>
                <Grid style={{display: 'flex', flexWrap: 'wrap'}}>
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
                  <Grid
                    item
                    xs={12}
                    sm
                    container
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center'
                    }}
                  >
                    <Typography
                      gutterBottom
                      color="textSecondary"
                      variant="subtitle1"
                    >
                      {cartItem.name}
                    </Typography>
                    <Typography
                      color="textSecondary"
                      variant="body2"
                      gutterBottom
                    >
                      {cartItem.maker}
                    </Typography>
                  </Grid>
                </Grid>
              </TableCell>
              <TableCell>
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}
                >
                  <IconButton
                    aria-label="remove one"
                    onClick={() => removeFromCart(user.id || token, cartItem)}
                  >
                    <RemoveIcon color="secondary" />
                  </IconButton>
                  <Typography variant="body2" color="textSecondary">
                    {cartItem.quantity}
                  </Typography>
                  <IconButton
                    aria-label="add one"
                    onClick={() =>
                      addToCart(user.id || token, cartItem.productId)
                    }
                  >
                    <AddIcon color="secondary" />
                  </IconButton>
                </div>
              </TableCell>
              <TableCell>
                <Typography color="textSecondary" variant="body2" gutterBottom>
                  ${cartItem.price}
                </Typography>
              </TableCell>
              <TableCell>
                <IconButton
                  aria-label="remove product"
                  onClick={() =>
                    removeProductFromCart(user.id || token, cartItem)
                  }
                >
                  <CloseIcon color="secondary" />
                </IconButton>
              </TableCell>
            </TableRow>
          )
        })}
      </TableBody>
      <TableFooter>
        <TableRow>
          {/* <TableCell>
           </TableCell> */}
          <TableCell align="right">
            <Typography color="textSecondary" variant="h6" gutterBottom>
              Total
            </Typography>
          </TableCell>
          <TableCell align="center">
            <Typography color="textSecondary" variant="h6" gutterBottom>
              {cart.totalQuantity}
            </Typography>
          </TableCell>
          <TableCell>
            <Typography color="textSecondary" variant="h6" gutterBottom>
              ${cart.totalPrice}
            </Typography>
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  )
}

const mapStateToProps = ({wines, user, cart}) => {
  return {wines, user, cart}
}
const mapDispatchToProps = dispatch => {
  return {
    removeFromCart(userId, productId) {
      dispatch(removeFromCart(userId, productId))
    },
    addToCart(userId, productId) {
      dispatch(addToCart(userId, productId))
    },
    removeProductFromCart(userId, productId) {
      dispatch(removeProductFromCart(userId, productId))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(CartList)
