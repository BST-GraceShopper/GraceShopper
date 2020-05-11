/* eslint-disable react/jsx-key */
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Typography} from '@material-ui/core'
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
  useStripe,
  useElements,
  StripeProvider
} from '@stripe/react-stripe-js'
import PaymentForm from './PaymentForm'

const Payment = ({}) => {
  const stripePromise = loadStripe('pk_test_SU0EkhevzXhxoILrxioT5Xp000opJGEGK4')

  return null
  // <StripeProvider apiKey="pk_test_SU0EkhevzXhxoILrxioT5Xp000opJGEGK4">
  // <Elements>
  // {/* <form onSubmit={handleSubmit}>
  //   <CardElement />
  //   <button type="submit" disabled={!stripe}>
  //     Pay
  //   </button>
  // </form> */}
  //   {/* <PaymentForm /> */}
  //  </Elements>
  //  </StripeProvider>
  // return <div><Typography>Payment</Typography>

  //       <Elements stripe={stripePromise}>
  //       <FormControl
  //           style={{margin: '10px', width: 'calc(100%-60px)'}}
  //           variant="outlined"
  //         >
  //           <InputLabel htmlFor="outlined">Test</InputLabel>
  //           <OutlinedInput
  //             id="test"
  //             // value={values.amount}
  //             // onChange={}
  //             // startAdornment={<InputAdornment position="start">$</InputAdornment>}
  //             labelWidth={30}
  //           />
  //         </FormControl>
  //       </Elements>
  //       </div>
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
export default connect(mapStateToProps)(Payment)
