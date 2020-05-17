/* eslint-disable no-unused-expressions */
/* eslint-disable react/jsx-key */
import React from 'react'
import {connect} from 'react-redux'
import {IconButton} from '@material-ui/core/'
import {Typography, Grid, Button} from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import RemoveIcon from '@material-ui/icons/Remove'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TableFooter from '@material-ui/core/TableFooter'
import CloseIcon from '@material-ui/icons/Close'
import {confirmPayment} from '../../store'
import {withStyles, makeStyles} from '@material-ui/core/styles'
import {useStripe, useElements} from '@stripe/react-stripe-js'

const StyledTableCell = withStyles(theme => ({
  body: {
    fontSize: 14,
    border: 'none',
    backgroundColor: 'rgba(255,255,255,0.1)',
    align: 'center'
  }
}))(TableCell)

const useStyles = makeStyles(theme => ({
  hover: {
    '&:hover': {
      backgroundColor: 'rgba(255,255,255,0.1)'
    }
  }
}))

const Confirmation = ({
  cart,
  paymentIntent,
  payment,
  handleNext,
  handleBack,
  confirmPayment
}) => {
  const stripe = useStripe()
  const elements = useElements()
  const headCells = [
    {id: 'item', numeric: false, disablePadding: true, label: 'Item'},
    {id: 'quantity', numeric: true, disablePadding: false, label: 'Quantity'},
    {id: 'price', numeric: true, disablePadding: false, label: 'Price'}
  ]
  const classes = useStyles()
  const handleSubmit = async () => {
    event.preventDefault()
    console.log(paymentIntent.id, payment.id)
    const response = await confirmPayment(paymentIntent.id, payment.id)
    console.log(response)
    if (response === 'succeeded') {
      handleNext()
    } else {
      alert('There was an error with your payment. Please try again later')
    }
  }
  const token = window.localStorage.getItem('guestToken')
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <Typography variant="h6">Review Your Order</Typography>
      <div
        onSubmit={handleSubmit}
        style={{
          margin: '10px 0px',
          width: '80%',
          height: '65%',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'auto'
        }}
      >
        <Table style={{border: '1px #303030 solid'}}>
          <TableBody style={{border: 'none'}}>
            {cart.items.map(cartItem => {
              return (
                <TableRow key={cartItem.productId} style={{border: 'none'}}>
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
                        <Typography
                          gutterBottom
                          color="textSecondary"
                          variant="h6"
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
                        {cartItem.quantity}
                      </Typography>
                    </div>
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <Typography color="textSecondary" variant="h6" gutterBottom>
                      ${cartItem.price}
                    </Typography>
                  </StyledTableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center'
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            width: '100%'
          }}
        >
          <Button
            onClick={handleBack}
            // className={classes.button}
          >
            Back
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            // className={classes.button}
          >
            Place Order
          </Button>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = ({cart, paymentIntent, payment}) => {
  return {cart, paymentIntent, payment}
}
const mapDispatchToProps = dispatch => {
  return {
    confirmPayment(piID, pmID) {
      console.log('confirm payment')
      return dispatch(confirmPayment(piID, pmID))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Confirmation)
