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

const Shipping = ({
  shipping,
  saveShipping,
  handleNext,
  handleBack,
  activeStep,
  steps
}) => {
  const [value, setValue] = React.useState('standard')

  const handleChange = event => {
    setValue(event.target.value)
  }
  const [state, setState] = React.useState(shipping)
  const handleSubmit = () => {
    event.preventDefault()
    saveShipping(state)
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
          // alignItems: 'space-around',
          // justifyContent: 'space-around',
          // alignContent: 'space-around',
          overflow: 'auto'
        }}
      >
        {/* <div  style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'space-around',
          justifyContent: 'space-around',
          alignContent: 'space-around',
          overflow:'auto'
        }}> */}
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
            <InputLabel htmlFor="outlined">First Name</InputLabel>
            <OutlinedInput
              id="firstName"
              value={state.firstName}
              onChange={ev => {
                setState({...state, firstName: ev.target.value})
              }}
              // startAdornment={<InputAdornment position="start">$</InputAdornment>}
              labelWidth={70}
            />
          </FormControl>
          <FormControl
            style={{width: 'calc(100%/2)', margin: '10px'}}
            variant="outlined"
          >
            <InputLabel htmlFor="outlined">Last Name</InputLabel>
            <OutlinedInput
              id="lastName"
              value={state.lastName}
              onChange={ev => setState({...state, lastName: ev.target.value})}
              // value={values.amount}
              // onChange={}
              // startAdornment={<InputAdornment position="start">$</InputAdornment>}
              labelWidth={70}
            />
          </FormControl>
        </div>
        <FormControl
          style={{margin: '10px', width: 'calc(100%-20px)'}}
          variant="outlined"
        >
          <InputLabel htmlFor="outlined">Address Line 1</InputLabel>
          <OutlinedInput
            id="address1"
            value={state.address1}
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
            value={state.address2}
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
              value={state.city}
              onChange={ev => setState({...state, city: ev.target.value})}
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
              value={state.state}
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
              value={state.zip}
              onChange={ev => setState({...state, zip: ev.target.value})}
              // value={values.amount}
              // onChange={}
              // startAdornment={<InputAdornment position="start">$</InputAdornment>}
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
              // value={values.amount}
              value={state.email}
              onChange={ev => setState({...state, email: ev.target.value})}
              // onChange={}
              // startAdornment={<InputAdornment position="start">$</InputAdornment>}
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
              // value={values.amount}
              value={state.phone}
              onChange={ev => setState({...state, phone: ev.target.value})}
              // onChange={}
              // startAdornment={<InputAdornment position="start">$</InputAdornment>}
              labelWidth={50}
            />
          </FormControl>
        </div>
        <div style={{margin: '10px'}}>
          <FormControl component="fieldset">
            <FormLabel component="legend">Shipping Time</FormLabel>
            <RadioGroup
              aria-label="gender"
              name="gender1"
              value={value}
              onChange={handleChange}
            >
              <FormControlLabel
                value="standard"
                control={<Radio />}
                label="Standard (5-7 Business Days) - $0.00"
              />
              <FormControlLabel
                value="rush"
                control={<Radio />}
                label="Rushed (2-3 Business Days) - $10.00"
              />
              <FormControlLabel
                value="oneday"
                control={<Radio />}
                label="One Day (Get it by tomorrow) - $30.00"
              />
            </RadioGroup>
          </FormControl>
        </div>
        {/* </div> */}
        {/* <Button type="submit">Submit</Button> */}
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
            disabled={activeStep === 0}
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
            {activeStep === steps.length - 1 ? 'Place Order' : 'Next'}
          </Button>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = ({wines, user, cart, shipping}) => {
  return {wines, cart, user, shipping}
}
const mapDispatchToProps = dispatch => {
  return {
    saveShipping(shipping) {
      console.log('save shipping')
      dispatch(saveShipping(shipping))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Shipping)
