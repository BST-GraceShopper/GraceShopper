/* eslint-disable react/jsx-key */
import React from 'react'
import {connect} from 'react-redux'
import Paper from '@material-ui/core/Paper'
import {Button, Modal} from '@material-ui/core/'
import {Typography} from '@material-ui/core'
import {checkout, getCart} from '../store/'
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'
import {makeStyles, ThemeProvider} from '@material-ui/core/styles'
import Shipping from './checkout/Shipping'
import PaymentForm from './checkout/PaymentForm'
import Confirmation from './checkout/Confirmation'
import {formTheme} from '../theme'
import {Elements} from '@stripe/react-stripe-js'
import {loadStripe} from '@stripe/stripe-js'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%'
  },
  button: {
    marginRight: theme.spacing(1)
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  }
}))

const Checkout = ({user, checkout, cart, getCart}) => {
  const [open, setOpen] = React.useState(false)
  const token = window.localStorage.getItem('guestToken')
  const classes = useStyles()
  const checkOut = id => {
    checkout(id)
    // setOpen(true)
  }

  const [activeStep, setActiveStep] = React.useState(0)
  const steps = ['Shipping', 'Payment', 'Confirmation']

  const handleNext = () => {
    if (activeStep + 1 === steps.length) {
      checkOut(user.id || token)
    }
    setActiveStep(prevActiveStep => prevActiveStep + 1)
  }

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1)
  }

  const handleClose = () => {
    setOpen(false)
    setActiveStep(0)
    getCart(user.id || token)
  }

  function getStepContent(step) {
    switch (step) {
      case 0:
        return (
          <Shipping
            handleNext={handleNext}
            handleBack={handleBack}
            // activeStep={activeStep}
            // steps={steps}
          />
        )
      case 1:
        return (
          <PaymentForm
            handleNext={handleNext}
            handleBack={handleBack}
            // activeStep={activeStep}
            // steps={steps}
          />
        )
      case 2:
        return (
          <Confirmation
            handleNext={handleNext}
            handleBack={handleBack}
            // activeStep={activeStep}
            // steps={steps}
          />
        )
      default:
        return null
    }
  }

  const stripePromise = loadStripe('pk_test_SU0EkhevzXhxoILrxioT5Xp000opJGEGK4')
  return (
    <div>
      <Button variant="outlined" onClick={() => setOpen(true)} color="primary">
        Checkout
      </Button>
      <div>
        <Modal
          open={open}
          // value={value}
          color="secondary"
          onClose={handleClose}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%'
            // height:'100%'
          }}
        >
          <div
            style={{
              // display: 'flex',
              // flexDirection: 'column',
              // justifyContent: 'space-between',
              // alignItems: 'space-between',
              // alignContent: 'space-between',
              width: 'calc(100%*2/3)',
              height: '80%'
            }}
          >
            <ThemeProvider theme={formTheme}>
              <Paper
                variant="outlined"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  alignItems: 'space-between',
                  alignContent: 'space-between',
                  padding: 30,
                  width: '100%',
                  height: '100%'
                  // width: 'calc(100%*2/3)',
                  // height: '80%'
                }}
              >
                {activeStep === steps.length ? (
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'center'
                    }}
                  >
                    <Typography className={classes.instructions}>
                      Thank you for your purchase!
                    </Typography>
                  </div>
                ) : (
                  <div style={{width: '100%', height: '100%'}}>
                    <Stepper activeStep={activeStep} theme={formTheme}>
                      {steps.map((label, idx) => {
                        return (
                          <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                          </Step>
                        )
                      })}
                    </Stepper>

                    {/* <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    overflow: 'auto',
                    height: '70%'
                  }}
                > */}
                    <Elements stripe={stripePromise}>
                      {getStepContent(activeStep)}
                    </Elements>
                    {/* </div> */}

                    {/* <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    padding: 30
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
                      disabled={activeStep === 0}
                      onClick={handleBack}
                      className={classes.button}
                    >
                      Back
                    </Button>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleNext}
                      className={classes.button}
                    >
                      {activeStep === steps.length - 1 ? 'Place Order' : 'Next'}
                    </Button>
                  </div>
                </div> */}
                  </div>
                )}
              </Paper>
            </ThemeProvider>
          </div>
        </Modal>
      </div>
    </div>
  )
}
// }

const mapStateToProps = ({user, cart}) => {
  return {cart, user}
}
const mapDispatchToProps = dispatch => {
  return {
    checkout(id) {
      console.log('checkout', id)
      dispatch(checkout(id))
    },
    getCart(id) {
      dispatch(getCart(id))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Checkout)
