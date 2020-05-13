/* eslint-disable react/jsx-key */
import React from 'react'
import {connect} from 'react-redux'
import {Typography} from '@material-ui/core'
import {loadStripe} from '@stripe/stripe-js'
import FormControl from '@material-ui/core/FormControl'
import TextField from '@material-ui/core/TextField'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import {InputLabel, Button} from '@material-ui/core'
import Checkbox from '@material-ui/core/Checkbox'
// import {makeStyles} from '@material-ui/core/styles'
import {
  CardElement,
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement,
  // Elements,
  useStripe,
  useElements
} from '@stripe/react-stripe-js'
import StripeInput from './StripeInput'
import {savePayment} from '../../store'

// const useStyles = makeStyles(theme => ({
//   disabled: {
//     color: 'red'
//   }
// }))

const PaymentForm = ({shipping, payment, savePayment}) => {
  const stripe = useStripe()
  const elements = useElements()
  const defaultState = !shipping.zip
  const [checked, setChecked] = React.useState(!defaultState)
  const [state, setState] = React.useState(payment)
  console.log(state)

  const handleChange = event => {
    setChecked(event.target.checked)
    setState(payment)
  }
  // const classes = useStyles()

  const handleSubmit = async event => {
    event.preventDefault()
    // const {name,address1, address2,city, state, zip} = state
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      ...state,
      card: elements.getElement(CardNumberElement)
    })
    savePayment(state)
    console.log(paymentMethod)
  }

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

      <form
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
            disabled={defaultState}
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
            id="name"
            disabled={checked}
            value={
              checked
                ? `${shipping.firstName} ${shipping.lastName}`
                : state.name
            }
            onChange={ev => setState({...state, name: ev.target.value})}
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
            value={checked ? shipping.address1 : state.address2}
            onChange={ev => setState({...state, address1: ev.target.value})}
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
            value={checked ? shipping.address2 : state.address2}
            onChange={ev => setState({...state, address2: ev.target.value})}
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
              value={checked ? shipping.city : state.city}
              onChange={ev => setState({...state, address1: ev.target.value})}
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
              value={checked ? shipping.state : state.state}
              onChange={ev => setState({...state, state: ev.target.value})}
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
              value={checked ? shipping.zip : state.zip}
              onChange={ev => setState({...state, zip: ev.target.value})}
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
            color="primary"
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
        <Button type="submit" disabled={!stripe}>
          Pay
        </Button>
      </form>
      {/* </form> */}
    </div>
  )
}

const mapStateToProps = ({shipping, payment}) => {
  return {shipping, payment}
}
const mapDispatchToProps = dispatch => {
  return {
    savePayment(payment) {
      console.log('save payment')
      dispatch(savePayment(payment))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(PaymentForm)
