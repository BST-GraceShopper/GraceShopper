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
import {removeFromCart, addToCart} from '../store/'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TablePagination from '@material-ui/core/TablePagination'
import TableRow from '@material-ui/core/TableRow'
import TableFooter from '@material-ui/core/TableFooter'

import TableSortLabel from '@material-ui/core/TableSortLabel'

const CartList = ({cart, user, removeFromCart, addToCart}) => {
  // return (
  // <Paper
  //   style={{
  //     // border:'1px gray solid',
  //     backgroundColor: 'black',
  //     padding: 10,
  //     margin: 20,
  //     maxWidth: 500
  //   }}
  // >
  //   {cart.items.map(cartItem => {
  //     return (
  //       <Grid
  //         container
  //         spacing={2}
  //         style={{border: '1px gray solid'}}
  //         key={cartItem.id}
  //       >
  //         <Grid item>
  //           <img
  //             alt="complex"
  //             src={cartItem.image}
  //             style={{
  //               margin: 'auto',
  //               display: 'block',
  //               maxWidth: 150,
  //               maxHeight: 150
  //             }}
  //           />
  //         </Grid>
  //         <Grid item xs={12} sm container>
  //           <Grid item xs container direction="column" spacing={2}>
  //             <Grid item xs>
  //               <Typography
  //                 gutterBottom
  //                 color="textSecondary"
  //                 variant="subtitle1"
  //               >
  //                 {cartItem.name}
  //               </Typography>
  //               <Typography variant="body2" gutterBottom>
  //                 {cartItem.maker}
  //               </Typography>
  //               <Typography variant="body2" color="textSecondary">
  //                 {cartItem.quantity}
  //               </Typography>
  //             </Grid>
  //             <ButtonBase
  //               onClick={() => removeFromCart(user.id, cartItem.productId)}
  //             >
  //               <Typography
  //                 variant="body2"
  //                 color="textSecondary"
  //                 // style={{cursor: 'pointer'}}
  //               >
  //                 Remove
  //               </Typography>
  //             </ButtonBase>
  //             <CardActions>
  //               <IconButton
  //                 aria-label="remove one"
  //                 onClick={() => removeFromCart(user.id, cartItem)}
  //               >
  //                 <RemoveIcon color="secondary" />
  //               </IconButton>
  //               <Typography variant="body2" color="textSecondary">
  //                 {cartItem.quantity}
  //               </Typography>
  //               <IconButton
  //                 aria-label="add one"
  //                 onClick={() => addToCart(user.id, cartItem.productId)}
  //               >
  //                 <AddIcon color="secondary" />
  //               </IconButton>
  //             </CardActions>
  //           </Grid>
  //           <Grid item>
  //             <Typography variant="subtitle1" color="textSecondary">
  //               ${cartItem.price}
  //             </Typography>
  //           </Grid>
  //         </Grid>
  //       </Grid>
  //     )
  //   })}
  // </Paper>
  const headCells = [
    {id: 'item', numeric: false, disablePadding: true, label: 'Item'},
    {id: 'quantity', numeric: true, disablePadding: false, label: 'Quantity'},
    {id: 'price', numeric: true, disablePadding: false, label: 'Price'}
  ]

  const token = window.localStorage.getItem('guestToken')
  return (
    <Table color="textSecondary">
      <TableHead>
        <TableRow>
          {['Item', 'Quantity', 'Price'].map(item => {
            return <TableCell>{item}</TableCell>
          })}
        </TableRow>
      </TableHead>
      <TableBody>
        {cart.items.map(cartItem => {
          return (
            <TableRow key={cartItem.productId}>
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
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(CartList)
