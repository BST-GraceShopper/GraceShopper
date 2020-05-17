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

const PaymentForm = ({
  // shipping,
  payment,
  savePayment,
  handleNext,
  handleBack
  // activeStep,
  // steps
}) => {
  const stripe = useStripe()
  const elements = useElements()
  // const sameAsShipping = {
  //   name: `${shipping.firstName} ${shipping.lastName}`,
  //   address: {
  //     line1: shipping.address1,
  //     line2: shipping.address2,
  //     state: shipping.state,
  //     city: shipping.city,
  //     postal_code: shipping.zip
  //   }
  // }

  const [checked, setChecked] = React.useState(false)
  const [address, setAddress] = React.useState(payment.billing_details.address)
  const [name, setName] = React.useState(payment.billing_details.name)

  // const handleChange = event => {
  //   setChecked(event.target.checked)
  //   if (event.target.checked) {
  //     setState({...state, billing_details: sameAsShipping})
  //   } else {
  //     setState(payment)
  //   }
  // }
  // const classes = useStyles()

  // const pay = async () => {
  //   try {
  //     console.log('test')
  //     const {error, paymentMethod} = await stripe.createPaymentMethod(state)
  //     console.log(paymentMethod)
  //   } catch (er) {
  //     console.log(er)
  //   }
  // }

  const handleSubmit = async event => {
    event.preventDefault()
    // const {name,address1, address2,city, state, zip} = state

    // const {error, paymentMethod} = await stripe.createPaymentMethod(state)
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      billing_details: {
        name,
        address
      },
      card: elements.getElement(CardNumberElement),
      type: 'card'
    })
    // await pay()

    // console.log(elements.getElement(CardNumberElement))
    // await pay()
    // console.log(paymentMethod)
    // savePayment(state)
    savePayment(paymentMethod)
    handleNext()

    // console.log(paymentMethod)
  }

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
      <Typography variant="h6">Billing Information</Typography>
      <form
        onSubmit={handleSubmit}
        style={{
          margin: '10px 0px',
          width: '80%',
          height: '65%',
          display: 'flex',
          flexDirection: 'column',
          // alignItems: 'space-around',
          // justifyContent: 'space-around',
          // alignContent: 'space-around',
          overflow: 'auto'
        }}
      >
        {/* <div
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
        </div> */}
        <FormControl
          style={{width: 'calc(100%-20px)', margin: '10px'}}
          variant="outlined"
        >
          <InputLabel htmlFor="outlined">Name On Card</InputLabel>
          <OutlinedInput
            id="name"
            disabled={checked}
            value={name}
            onChange={ev => setName(ev.target.value)}
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
            value={address.line1}
            onChange={ev => setAddress({...address, line1: ev.target.value})}
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
            value={address.line2}
            onChange={ev => setAddress({...address, line2: ev.target.value})}
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
              value={address.city}
              onChange={ev => setAddress({...address, city: ev.target.value})}
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
              value={address.state}
              onChange={ev => setAddress({...address, state: ev.target.value})}
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
              value={address.postal_code}
              onChange={ev =>
                setAddress({...address, postal_code: ev.target.value})
              }
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
      </form>
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
            Next
          </Button>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = ({paymentIntent, payment}) => {
  return {paymentIntent, payment}
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
