/* eslint-disable react/jsx-key */
import React, {Component} from 'react'
import {connect} from 'react-redux'
import Paper from '@material-ui/core/Paper'
import {Button, Modal} from '@material-ui/core/'
import CardContent from '@material-ui/core/CardContent'
import {Typography} from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import {checkout, getCart} from '../store/'
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'
import {makeStyles, ThemeProvider} from '@material-ui/core/styles'
import Shipping from './checkout/Shipping'
import Payment from './checkout/Payment'
import Confirmation from './checkout/Confirmation'

import {theme, formTheme} from '../theme'

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

  function getStepContent(step) {
    switch (step) {
      case 0:
        return <Shipping />
      case 1:
        return <Payment />
      case 2:
        return <Confirmation />
      default:
        return null
    }
  }

  const [activeStep, setActiveStep] = React.useState(0)
  const steps = ['Shipping', 'Payment', 'Confirmation']

  const handleNext = () => {
    console.log(activeStep + 1)
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

  return (
    <div>
      <Button onClick={() => setOpen(true)} color="secondary">
        Checkout
      </Button>
      <Modal
        open={open}
        // value={value}
        color="secondary"
        onClose={handleClose}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Paper
          variant="outlined"
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'space-between',
            alignContent: 'space-between',
            padding: 30,
            width: 'calc(100%*2/3)',
            height: '80%'
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
              <ThemeProvider theme={formTheme}>
                <Stepper activeStep={activeStep} theme={formTheme}>
                  {steps.map((label, idx) => {
                    return (
                      <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                      </Step>
                    )
                  })}
                </Stepper>

                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',

                    height: '80%'
                  }}
                >
                  {getStepContent(activeStep)}
                </div>
              </ThemeProvider>
              <div
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
                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                  </Button>
                </div>
              </div>
            </div>
          )}
        </Paper>
      </Modal>
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
