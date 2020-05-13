/* eslint-disable react/jsx-key */
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Typography, Button} from '@material-ui/core'
import {loadStripe} from '@stripe/stripe-js'
import FormControl from '@material-ui/core/FormControl'
import TextField from '@material-ui/core/TextField'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import {InputLabel} from '@material-ui/core'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormLabel from '@material-ui/core/FormLabel'
import ReactDOM from 'react-dom'
import Checkbox from '@material-ui/core/Checkbox'
import {makeStyles} from '@material-ui/core/styles'
import {
  CardElement,
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement,
  Elements,
  useStripe,
  useElements
} from '@stripe/react-stripe-js'
import StripeInput from './StripeInput'

const useStyles = makeStyles(theme => ({
  disabled: {
    color: 'red'
  }
}))

const PaymentForm = () => {
  const stripe = useStripe()
  const elements = useElements()
  const [checked, setChecked] = React.useState(true)

  const handleChange = event => {
    setChecked(event.target.checked)
  }
  const classes = useStyles()

  const handleSubmit = async event => {
    event.preventDefault()
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardNumberElement)
      // billing_details: {
      //   name,
      //   address: {
      //     postal_code: postal,
      //   },
      // },
    })
    console.log(paymentMethod)
  }

  console.log(stripe)

  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <Typography variant="h6">Billing Information</Typography>
      {/* <form onSubmit={handleSubmit}> */}

      <div
        style={{
          margin: '10px 0px',
          width: '80%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'space-around',
          justifyContent: 'space-around',
          alignContent: 'space-around'
        }}
        onSubmit={handleSubmit}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            alignContent: 'center'
          }}
        >
          <Checkbox
            checked={checked}
            onChange={handleChange}
            color="primary"
            inputProps={{'aria-label': 'primary checkbox'}}
          />
          <Typography>Same as Shipping</Typography>
        </div>
        <FormControl
          style={{width: 'calc(100%-20px)', margin: '10px'}}
          variant="outlined"
        >
          <InputLabel htmlFor="outlined">Name On Card</InputLabel>
          <OutlinedInput
            id="lastName"
            disabled={checked}
            // InputProps={{
            //   className: classes.disabled
            // }}
            // value={values.amount}
            // onChange={}
            // startAdornment={<InputAdornment position="start">$</InputAdornment>}
            labelWidth={90}
          />
        </FormControl>
        <FormControl
          style={{margin: '10px', width: 'calc(100%-20px)'}}
          variant="outlined"
        >
          <InputLabel htmlFor="outlined">Address Line 1</InputLabel>
          <OutlinedInput
            id="address1"
            disabled={checked}
            // value={values.amount}
            // onChange={}
            // startAdornment={<InputAdornment position="start">$</InputAdornment>}
            labelWidth={90}
          />
        </FormControl>
        <FormControl
          style={{margin: '10px', width: 'calc(100%-20px)'}}
          variant="outlined"
        >
          <InputLabel htmlFor="outlined">Address Line 2</InputLabel>
          <OutlinedInput
            id="address2"
            disabled={checked}
            // value={values.amount}
            // onChange={}
            // startAdornment={<InputAdornment position="start">$</InputAdornment>}
            labelWidth={90}
          />
        </FormControl>
        <div
          style={{
            display: 'flex',
            width: '100%',
            alignItems: 'space-between',
            alignContent: 'space-between',
            justifyContent: 'space-between'
          }}
        >
          <FormControl
            style={{margin: '10px', width: 'calc(100%-60px)'}}
            variant="outlined"
          >
            <InputLabel htmlFor="outlined">City</InputLabel>
            <OutlinedInput
              id="city"
              disabled={checked}
              // value={values.amount}
              // onChange={}
              // startAdornment={<InputAdornment position="start">$</InputAdornment>}
              labelWidth={30}
            />
          </FormControl>
          <FormControl
            style={{margin: '10px', width: 'calc(100%-60px)'}}
            variant="outlined"
          >
            <InputLabel htmlFor="outlined">State</InputLabel>
            <OutlinedInput
              id="state"
              disabled={checked}
              // value={values.amount}
              // onChange={}
              // startAdornment={<InputAdornment position="start">$</InputAdornment>}
              labelWidth={30}
            />
          </FormControl>
          <FormControl
            style={{margin: '10px', width: 'calc(100%-60px)'}}
            variant="outlined"
          >
            <InputLabel htmlFor="outlined">ZIP</InputLabel>
            <OutlinedInput
              id="zip"
              disabled={checked}
              // value={values.amount}
              // onChange={}
              // startAdornment={<InputAdornment position="start">$</InputAdornment>}
              labelWidth={30}
            />
          </FormControl>
        </div>
        <FormControl
          style={{margin: '10px', width: 'calc(100%-20px)'}}
          variant="outlined"
        >
          <TextField
            label="Credit Card Number"
            name="ccnumber"
            variant="outlined"
            required
            fullWidth
            InputLabelProps={{shrink: true}}
            InputProps={{
              inputComponent: StripeInput,
              inputProps: {
                component: CardNumberElement
              }
            }}
          />
        </FormControl>
        {/* <div
            style={{
              display: 'flex',
              width: '100%',
              alignItems: 'space-between',
              alignContent: 'space-between',
              justifyContent: 'space-between',
      
            }}
          > */}
        <FormControl
          style={{margin: '10px', width: 'calc(100%-20px)'}}
          variant="outlined"
        >
          <TextField
            label="Expiry"
            name="expiry"
            variant="outlined"
            required
            fullWidth
            InputLabelProps={{shrink: true}}
            InputProps={{
              inputComponent: StripeInput,
              inputProps: {
                component: CardExpiryElement
              }
            }}
          />
        </FormControl>
        <FormControl
          style={{margin: '10px', width: 'calc(100%-20px)'}}
          variant="outlined"
        >
          <TextField
            label="CVC"
            name="cvc"
            variant="outlined"
            required
            fullWidth
            InputLabelProps={{shrink: true}}
            InputProps={{
              inputComponent: StripeInput,
              inputProps: {
                component: CardCvcElement
              }
            }}
          />
        </FormControl>
        {/* </div> */}
        {/* <Button type="submit" disabled={!stripe}>
        Pay
      </Button> */}
      </div>
      {/* </form> */}
    </div>
  )
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
export default connect(mapStateToProps)(PaymentForm)
