/* eslint-disable no-unused-expressions */
/* eslint-disable react/jsx-key */
import React from 'react'
import {connect} from 'react-redux'
import {IconButton} from '@material-ui/core/'
import {Typography, Grid} from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import RemoveIcon from '@material-ui/icons/Remove'
import {removeFromCart, addToCart, removeProductFromCart} from '../store/'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TableFooter from '@material-ui/core/TableFooter'
import CloseIcon from '@material-ui/icons/Close'
import {withStyles, makeStyles} from '@material-ui/core/styles'

const StyledTableCell = withStyles(theme => ({
  head: {
    fontSize: 14,
    borderBottom: '1px solid black',
    backgroundColor: 'rgba(255,255,255,0.1)',
    align: 'center',
    borderRight: 'none'
  },
  body: {
    fontSize: 14,
    borderBottom: '1px solid black',
    backgroundColor: 'rgba(255,255,255,0.1)',
    align: 'center',
    borderRight: 'none'
  },
  footer: {
    fontSize: 14,
    borderBottom: 'none',
    backgroundColor: 'rgba(255,255,255,0.1)',
    align: 'center',
    borderRight: 'none'
  }
}))(TableCell)

const useStyles = makeStyles(theme => ({
  hover: {
    '&:hover': {
      backgroundColor: 'rgba(255,255,255,0.1)'
    }
  }
}))

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
  const classes = useStyles()
  const token = window.localStorage.getItem('guestToken')
  return (
    <Table>
      <TableHead>
        <TableRow>
          {['Item', 'Quantity', 'Price', ''].map(item => {
            return (
              <StyledTableCell align="center" key={item}>
                <Typography
                  gutterBottom
                  color="textSecondary"
                  variant="subtitle1"
                >
                  {item}
                </Typography>
              </StyledTableCell>
            )
          })}
        </TableRow>
      </TableHead>
      <TableBody>
        {cart.items.map(cartItem => {
          return (
            <TableRow key={cartItem.productId}>
              <StyledTableCell align="center">
                <Grid style={{display: 'flex', flexWrap: 'wrap'}}>
                  <Grid item>
                    <img
                      alt="complex"
                      src={cartItem.image}
                      style={{
                        margin: 'auto',
                        display: 'block',
                        maxWidth: 100,
                        maxHeight: 100
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
                    <Typography gutterBottom color="textSecondary" variant="h6">
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
              </StyledTableCell>
              <StyledTableCell align="center">
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}
                >
                  <IconButton
                    aria-label="remove one"
                    className={classes.hover}
                    onClick={() => removeFromCart(user.id || token, cartItem)}
                  >
                    <RemoveIcon color="primary" />
                  </IconButton>
                  <Typography variant="h6" color="textSecondary">
                    {cartItem.quantity}
                  </Typography>
                  <IconButton
                    aria-label="add one"
                    className={classes.hover}
                    onClick={() =>
                      addToCart(user.id || token, cartItem.productId)
                    }
                  >
                    <AddIcon color="primary" />
                  </IconButton>
                </div>
              </StyledTableCell>
              <StyledTableCell align="center">
                <Typography color="textSecondary" variant="h6" gutterBottom>
                  ${cartItem.price}
                </Typography>
              </StyledTableCell>
              <StyledTableCell align="center">
                <IconButton
                  aria-label="remove product"
                  className={classes.hover}
                  onClick={() =>
                    removeProductFromCart(user.id || token, cartItem)
                  }
                >
                  <CloseIcon color="primary" />
                </IconButton>
              </StyledTableCell>
            </TableRow>
          )
        })}
      </TableBody>
      <TableFooter>
        <TableRow>
          <StyledTableCell align="right">
            <Typography color="textSecondary" variant="h6" gutterBottom>
              Total
            </Typography>
          </StyledTableCell>
          <StyledTableCell align="center">
            <Typography color="textSecondary" variant="h6" gutterBottom>
              {cart.totalQuantity}
            </Typography>
          </StyledTableCell>
          <StyledTableCell align="center">
            <Typography color="textSecondary" variant="h6" gutterBottom>
              ${cart.totalPrice}
            </Typography>
          </StyledTableCell>
          <StyledTableCell />
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
