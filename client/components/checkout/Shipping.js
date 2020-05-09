/* eslint-disable react/jsx-key */
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Typography} from '@material-ui/core'
import FormControl from '@material-ui/core/FormControl'
import TextField from '@material-ui/core/TextField'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import {InputLabel} from '@material-ui/core'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormLabel from '@material-ui/core/FormLabel'

const Shipping = ({}) => {
  const [value, setValue] = React.useState('standard')

  const handleChange = event => {
    setValue(event.target.value)
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
      <Typography variant="h6">Shipping Information</Typography>
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
      >
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
            medium
            variant="outlined"
          >
            <InputLabel htmlFor="outlined">First Name</InputLabel>
            <OutlinedInput
              id="firstName"
              // value={values.amount}
              // onChange={}
              // startAdornment={<InputAdornment position="start">$</InputAdornment>}
              labelWidth={70}
            />
          </FormControl>
          <FormControl
            style={{width: 'calc(100%/2)', margin: '10px'}}
            medium
            variant="outlined"
          >
            <InputLabel htmlFor="outlined">Last Name</InputLabel>
            <OutlinedInput
              id="lastName"
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
          <InputLabel item xs htmlFor="outlined">
            Address Line 1
          </InputLabel>
          <OutlinedInput
            id="address1"
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
          <InputLabel item xs htmlFor="outlined">
            Address Line 2
          </InputLabel>
          <OutlinedInput
            id="address2"
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
            medium
            variant="outlined"
          >
            <InputLabel htmlFor="outlined">City</InputLabel>
            <OutlinedInput
              id="city"
              // value={values.amount}
              // onChange={}
              // startAdornment={<InputAdornment position="start">$</InputAdornment>}
              labelWidth={30}
            />
          </FormControl>
          <FormControl
            style={{margin: '10px', width: 'calc(100%-60px)'}}
            medium
            variant="outlined"
          >
            <InputLabel htmlFor="outlined">State</InputLabel>
            <OutlinedInput
              id="state"
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
            medium
            variant="outlined"
          >
            <InputLabel htmlFor="outlined">Email</InputLabel>
            <OutlinedInput
              id="email"
              // value={values.amount}
              // onChange={}
              // startAdornment={<InputAdornment position="start">$</InputAdornment>}
              labelWidth={50}
            />
          </FormControl>
          <FormControl
            style={{width: 'calc(100%/2)', margin: '10px'}}
            medium
            variant="outlined"
          >
            <InputLabel htmlFor="outlined">Phone</InputLabel>
            <OutlinedInput
              id="phone"
              // value={values.amount}
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
      </div>
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
export default connect(mapStateToProps)(Shipping)
