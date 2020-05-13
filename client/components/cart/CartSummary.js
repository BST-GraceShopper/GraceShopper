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
    border: 'none'
  }
}))(TableCell)
class CartSummary extends Component {
  componentDidMount() {
    // const {items,totalPrice,totalQuantity} = this.props.cart
    console.log(this.props.cart)
    var position = document
      .getElementById('summaryTable')
      .getBoundingClientRect()
    console.log(position)
  }
  render() {
    const {totalQuantity, totalPrice} = this.props.cart
    return (
      // <Paper
      //   style={{
      //     // border:'1px gray solid',
      //     background:'transparent',
      //     // padding: 10,
      //     margin: '10px 0px',
      //     maxWidth: 500
      //   }}
      // >
      // <div>
      //   <div style={{display:'flex', justifyContent:'space-between'}}>
      //     <Typography color="textSecondary">Total Cost: </Typography>
      //     <Typography color="textSecondary">{totalPrice}</Typography>
      //   </div>
      //   <div style={{display:'flex', justifyContent:'space-between'}}>
      //     <Typography color="textSecondary">Tax: </Typography>
      //     <Typography color="textSecondary">{totalPrice*.05}</Typography>
      //   </div>
      //   <div style={{display:'flex', justifyContent:'space-between'}}>
      //     <Typography color="textSecondary">Shipping:</Typography>
      //     <Typography color="textSecondary">Varies</Typography>
      //   </div>
      //   <div style={{display:'flex', justifyContent:'space-between'}}>
      //     <Typography color="textSecondary">Grand Total:</Typography>
      //     <Typography color="textSecondary"> ${totalPrice + totalPrice * 0.05 + 5}</Typography>
      //   </div>
      //   </div>
      // </Paper>
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
              <Typography color="textSecondary">
                ${totalPrice * 0.05}
              </Typography>
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
