/* eslint-disable react/jsx-key */
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Typography, Button} from '@material-ui/core'
import {Elements} from '@stripe/react-stripe-js'
import {loadStripe} from '@stripe/stripe-js'
import FormControl from '@material-ui/core/FormControl'
import TextField from '@material-ui/core/TextField'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import {InputLabel} from '@material-ui/core'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormLabel from '@material-ui/core/FormLabel'
import {
  CardElement,
  injectStripe,
  CardNumberElement,
  useStripe,
  useElements
} from '@stripe/react-stripe-js'
// import {
//   CardElement,
//   injectStripe,
//   StripeProvider,
// } from 'react-stripe-elements'

const PaymentForm = ({}) => {
  // const stripePromise = loadStripe("pk_test_SU0EkhevzXhxoILrxioT5Xp000opJGEGK4")
  const stripe = useStripe()
  const [err, setErr] = React.useState('')
  const elements = useElements()

  const handleSubmit = async event => {
    // Block native form submission.
    event.preventDefault()

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const cardElement = elements.getElement(CardElement)
    console.log(cardElement)

    // Use your card Element with other Stripe.js APIs
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement
    })

    if (error) {
      console.log('[error]', error)
    } else {
      console.log('[PaymentMethod]', paymentMethod)
    }
  }
  const handleChange = ({error}) => {
    console.log('change')
    if (error) {
      console.log(error)
      setErr(error)
    }
  }

  return (
    <form style={{width: '200px'}} onSubmit={handleSubmit}>
      <label style={{width: '200px'}}>
        {/* <Typography>Card Details</Typography> */}

        <CardElement
          style={{width: '200px', height: '200px', border: '1px solid black'}}
          onChange={handleChange}
          options={{
            style: {
              base: {
                width: '300px',
                letterSpacing: '0.025em',
                fontSize: '24px',
                color: '#000000',
                '::placeholder': {
                  color: '#000000'
                }
              },
              invalid: {
                color: '#9e2146'
              }
            }
          }}
        >
          {/* <TextField>
          </TextField> */}
        </CardElement>
      </label>
      <Button type="submit" disabled={!stripe}>
        Pay
      </Button>
    </form>
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
