/* eslint-disable no-unused-expressions */
/* eslint-disable react/jsx-key */
import React from 'react'
import {connect} from 'react-redux'
import {IconButton} from '@material-ui/core/'
import {Typography, Grid} from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import RemoveIcon from '@material-ui/icons/Remove'
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
    borderBottom: '1px #303030 solid',
    backgroundColor: 'rgba(255,255,255,0.1)',
    align: 'center',
    borderRight: 'none'
  },
  body: {
    fontSize: 14,
    borderBottom: '1px #303030 solid',
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

const OrderList = ({order, user}) => {
  const headCells = [
    {id: 'item', numeric: false, disablePadding: true, label: 'Item'},
    {id: 'quantity', numeric: true, disablePadding: false, label: 'Quantity'},
    {id: 'price', numeric: true, disablePadding: false, label: 'Price'}
  ]
  const classes = useStyles()
  const token = window.localStorage.getItem('guestToken')
  return (
    <Table style={{border: 'none'}}>
      <TableHead>
        <TableRow style={{border: 'none'}}>
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
      <TableBody style={{border: 'none'}}>
        {order.items.map(orderItem => {
          return (
            <TableRow key={orderItem.productId} style={{border: 'none'}}>
              <StyledTableCell align="center">
                <Grid style={{display: 'flex', flexWrap: 'wrap'}}>
                  <Grid item>
                    <img
                      alt="complex"
                      src={orderItem.image}
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
                      {orderItem.name}
                    </Typography>
                    <Typography
                      color="textSecondary"
                      variant="body2"
                      gutterBottom
                    >
                      {orderItem.maker}
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
                  <Typography variant="h6" color="textSecondary">
                    {orderItem.quantity}
                  </Typography>
                </div>
              </StyledTableCell>
              <StyledTableCell align="center">
                <Typography color="textSecondary" variant="h6" gutterBottom>
                  ${orderItem.price}
                </Typography>
              </StyledTableCell>
            </TableRow>
          )
        })}
      </TableBody>
      <TableFooter>
        <TableRow style={{border: 'none'}}>
          <StyledTableCell align="right">
            <Typography color="textSecondary" variant="h6" gutterBottom>
              Total
            </Typography>
          </StyledTableCell>
          <StyledTableCell align="center">
            <Typography color="textSecondary" variant="h6" gutterBottom>
              {order.totalQuantity}
            </Typography>
          </StyledTableCell>
          <StyledTableCell align="center">
            <Typography color="textSecondary" variant="h6" gutterBottom>
              ${order.totalPrice}
            </Typography>
          </StyledTableCell>
          <StyledTableCell />
        </TableRow>
      </TableFooter>
    </Table>
  )
}

const mapStateToProps = ({user, order}) => {
  return {user, order}
}
// const mapDispatchToProps = dispatch => {
//   return {
//     removeFromorder(userId, productId) {
//       dispatch(removeFromorder(userId, productId))
//     },
//     addToorder(userId, productId) {
//       dispatch(addToorder(userId, productId))
//     },
//     removeProductFromorder(userId, productId) {
//       dispatch(removeProductFromorder(userId, productId))
//     }
//   }
// }
export default connect(mapStateToProps, null)(OrderList)
