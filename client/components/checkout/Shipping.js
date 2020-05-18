/* eslint-disable react/jsx-key */
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Typography} from '@material-ui/core'
import FormControl from '@material-ui/core/FormControl'
import TextField from '@material-ui/core/TextField'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import {InputLabel, Button} from '@material-ui/core'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormLabel from '@material-ui/core/FormLabel'
import {saveShipping} from '../../store'
import {useStripe, useElements} from '@stripe/react-stripe-js'

const Shipping = ({
  paymentIntent,
  saveShipping,
  handleNext,
  handleBack,
  cart
}) => {
  const [value, setValue] = React.useState(5)
  const stripe = useStripe()
  const handleChange = event => {
    setValue(parseInt(event.target.value))
  }
  const [name, setName] = React.useState(paymentIntent.shipping.name)
  const [email, setEmail] = React.useState(paymentIntent.receipt_email)
  const [phone, setPhone] = React.useState(paymentIntent.shipping.phone)
  const [address, setAddress] = React.useState(paymentIntent.shipping.address)
  const handleSubmit = () => {
    event.preventDefault()
    saveShipping({
      amount:
        (cart.totalPrice + Math.floor(cart.totalPrice * 0.05) + value) * 100,
      receipt_email: email,
      shipping: {
        name,
        phone,
        address
      }
    })
    handleNext()
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
      <Typography variant="h6">Shipping Information</Typography>
      <form
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
        <FormControl
          style={{width: 'calc(100%-20px)', margin: '10px'}}
          variant="outlined"
        >
          <InputLabel htmlFor="outlined">Full Name</InputLabel>
          <OutlinedInput
            id="name"
            value={name}
            required
            onChange={ev => setName(ev.target.value)}
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
            required
            value={address.line1}
            onChange={ev => setAddress({...address, line1: ev.target.value})}
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
            value={address.line2}
            onChange={ev => setAddress({...address, line2: ev.target.value})}
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
              required
              value={address.city}
              onChange={ev => setAddress({...address, city: ev.target.value})}
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
              required
              value={address.state}
              onChange={ev => setAddress({...address, state: ev.target.value})}
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
              required
              value={address.postal_code}
              onChange={ev =>
                setAddress({...address, postal_code: ev.target.value})
              }
              labelWidth={30}
            />
          </FormControl>
        </div>
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
            style={{width: 'calc(100%/2)', margin: '10px'}}
            variant="outlined"
          >
            <InputLabel htmlFor="outlined">Email</InputLabel>
            <OutlinedInput
              id="email"
              value={email}
              required
              onChange={ev => setEmail(ev.target.value)}
              labelWidth={50}
            />
          </FormControl>
          <FormControl
            style={{width: 'calc(100%/2)', margin: '10px'}}
            variant="outlined"
          >
            <InputLabel htmlFor="outlined">Phone</InputLabel>
            <OutlinedInput
              id="phone"
              required
              value={phone}
              onChange={ev => setPhone(ev.target.value)}
              labelWidth={50}
            />
          </FormControl>
        </div>
        <div style={{margin: '10px'}}>
          <FormControl component="fieldset">
            <FormLabel component="legend">Shipping Time</FormLabel>
            <RadioGroup
              aria-label="shipping"
              name="shipping"
              value={value}
              onChange={handleChange}
            >
              <FormControlLabel
                value={5}
                control={<Radio />}
                label="Standard (5-7 Business Days) - $5.00"
              />
              <FormControlLabel
                value={10}
                control={<Radio />}
                label="Rushed (2-3 Business Days) - $10.00"
              />
              <FormControlLabel
                value={30}
                control={<Radio />}
                label="One Day (Get it by tomorrow) - $30.00"
              />
            </RadioGroup>
          </FormControl>
        </div>
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
          <Button disabled onClick={handleBack}>
            Back
          </Button>
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Next
          </Button>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = ({wines, user, cart, paymentIntent}) => {
  return {wines, cart, user, paymentIntent}
}
const mapDispatchToProps = dispatch => {
  return {
    saveShipping(paymentIntent) {
      console.log('save shipping')
      dispatch(saveShipping(paymentIntent))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Shipping)
