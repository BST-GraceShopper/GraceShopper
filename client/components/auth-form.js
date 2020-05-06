/* eslint-disable complexity */
import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {auth} from '../store'
import Button from '@material-ui/core/Button'
import InputAdornment from '@material-ui/core/InputAdornment'
import TextField from '@material-ui/core/TextField'
import AccountCircle from '@material-ui/icons/AccountCircle'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import IconButton from '@material-ui/core/IconButton'
import LockIcon from '@material-ui/icons/Lock'
import {Divider} from '@material-ui/core'

/**
 * COMPONENT
 */
const AuthForm = props => {
  const {name, displayName, handleSubmit} = props
  const err = props.error
  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false
  })
  // const [open, setOpen] = React.useState(true)
  const handleChange = prop => event => {
    setValues({...values, [prop]: event.target.value})
  }

  const handleClickShowPassword = () => {
    setValues({...values, showPassword: !values.showPassword})
  }

  const handleMouseDownPassword = event => {
    event.preventDefault()
  }

  // const handleClose = () => {
  //   history.goBack()
  //   setOpen(false)
  // }
  // const handleToggle = () => {
  //   setOpen(!open)
  // }

  return (
    <div style={{display: 'flex', flexDirection: 'flex'}}>
      <form
        onSubmit={handleSubmit}
        name={name}
        style={{
          display: 'flex',
          width: 'calc(100%/2)',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <TextField
          error={err && err.response && err.response.data}
          id="outlined-with-icon-adornment"
          style={{margin: 10, width: 'calc(100%*2/3', color: 'black'}}
          label="Username"
          name="email"
          variant="outlined"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            )
          }}
        />
        <TextField
          error={err && err.response && err.response.data}
          id="outlined-adornment-password"
          type={values.showPassword ? 'text' : 'password'}
          value={values.password}
          style={{margin: 10, width: 'calc(100%*2/3'}}
          label="Password"
          variant="outlined"
          name="password"
          onChange={handleChange('password')}
          helperText={
            displayName === 'Sign Up'
              ? 'Make sure your password is strong'
              : ' '
          }
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LockIcon />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            )
          }}
        />
        <Button
          size="large"
          type="submit"
          style={{margin: 10, width: 'calc(100%/2)'}}
          variant="contained"
          color="primary"
          // name={name}
          // href={`/auth/${name}`}
          // onClick={(ev)=>handleSubmit(ev)}
        >
          {displayName}
        </Button>
        {err && err.response && <div> {err.response.data} </div>}
      </form>
      <Divider orientation="vertical" color="primary" flexItem />
      <div
        style={{
          width: 'calc(100%/2)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column'
        }}
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1024px-Google_%22G%22_Logo.svg.png"
          style={{width: 75, height: 75}}
        />
        <Button
          size="large"
          style={{margin: 20, width: 'calc(100%/2)'}}
          variant="contained"
          color="primary"
          href="/auth/google"
          // name="google"
          // onClick={(ev)=>handleSubmit(ev)}
        >
          {displayName} with Google
        </Button>
      </div>
    </div>
  )
}

/**
 * CONTAINER
 *   Note that we have two different sets of 'mapStateToProps' functions -
 *   one for Login, and one for Signup. However, they share the same 'mapDispatchToProps'
 *   function, and share the same Component. This is a good example of how we
 *   can stay DRY with interfaces that are very similar to each other!
 */
const mapLogin = state => {
  return {
    name: 'login',
    displayName: 'Login',
    error: state.user.error
  }
}

const mapSignup = state => {
  return {
    name: 'signup',
    displayName: 'Sign Up',
    error: state.user.error
  }
}

const mapDispatch = dispatch => {
  return {
    handleSubmit(evt) {
      evt.preventDefault()
      const formName = evt.target.name
      const email = evt.target.email.value
      const password = evt.target.password.value
      dispatch(auth(email, password, formName))
    }
  }
}

export const Login = connect(mapLogin, mapDispatch)(AuthForm)
export const Signup = connect(mapSignup, mapDispatch)(AuthForm)

/**
 * PROP TYPES
 */
AuthForm.propTypes = {
  name: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.object
}
