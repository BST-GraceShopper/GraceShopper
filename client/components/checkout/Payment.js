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

const Payment = ({handleNext, handleBack, activeStep, steps}) => {
  const stripePromise = loadStripe('pk_test_SU0EkhevzXhxoILrxioT5Xp000opJGEGK4')

  return (
    <Elements stripe={stripePromise}>
      <PaymentForm
        handleNext={handleNext}
        handleBack={handleBack}
        activeStep={activeStep}
        steps={steps}
      />
    </Elements>
  )
}

const mapStateToProps = ({wines, user, cart}) => {
  return {wines, cart, user}
}

export default connect(mapStateToProps)(Payment)
