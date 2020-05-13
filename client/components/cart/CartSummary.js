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
  Grid,
  Table,
  TableRow,
  TableCell,
  TableBody
} from '@material-ui/core/'
import CardContent from '@material-ui/core/CardContent'
import {Typography} from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import {withStyles, makeStyles} from '@material-ui/core/styles'

const StyledTableCell = withStyles(theme => ({
  body: {
    fontSize: 14,
    border: 'none',
    padding: '5px 10px'
  }
}))(TableCell)

const CartSummary = ({cart}) => {
  const {totalQuantity, totalPrice} = cart
  return (
    <Table id="summaryTable">
      <TableBody>
        <TableRow>
          <StyledTableCell align="left">
            <Typography color="textSecondary">Total Cost:</Typography>
          </StyledTableCell>
          <StyledTableCell align="right">
            <Typography color="textSecondary">${totalPrice}</Typography>
          </StyledTableCell>
        </TableRow>
        <TableRow>
          <StyledTableCell align="left">
            <Typography color="textSecondary">Tax</Typography>
          </StyledTableCell>
          <StyledTableCell align="right">
            <Typography color="textSecondary">${totalPrice * 0.05}</Typography>
          </StyledTableCell>
        </TableRow>
        <TableRow>
          <StyledTableCell align="left">
            <Typography color="textSecondary">Shipping:</Typography>
          </StyledTableCell>
          <StyledTableCell align="right">
            <Typography color="textSecondary">Varies</Typography>
          </StyledTableCell>
        </TableRow>
        <TableRow>
          <StyledTableCell align="left">
            <Typography color="textSecondary">Grand Total:</Typography>
          </StyledTableCell>
          <StyledTableCell align="right">
            <Typography color="textSecondary">
              ${totalPrice + totalPrice * 0.05}
            </Typography>
          </StyledTableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}

const mapStateToProps = ({cart}) => {
  return {cart}
}

export default connect(mapStateToProps)(CartSummary)
