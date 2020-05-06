import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const GET_USER = 'GET_USER'
const REMOVE_USER = 'REMOVE_USER'

/**
 * INITIAL STATE
 */
const defaultUser = {}

/**
 * ACTION CREATORS
 */
const getUser = user => ({type: GET_USER, user})
const removeUser = () => ({type: REMOVE_USER})

/**
 * THUNK CREATORS
 */
export const me = () => async dispatch => {
  try {
    const res = await axios.get('/auth/me')
    if (!res.data) {
      dispatch(guestLogin())
    } else {
      dispatch(getUser(res.data || defaultUser))
    }
  } catch (err) {
    console.error(err)
  }
}

export const guestLogin = () => async dispatch => {
  try {
    const token = window.localStorage.getItem('guestToken')
    if (token) {
      //login guest
      // const res = await axios.post('/auth/guest/login', {token})
      // console.log('login', res.data)
    } else {
      //create new guest
      const res = await axios.get('/auth/guest/signup')
      console.log('signup', res.data)
      window.localStorage.setItem('guestToken', res.data)
    }
    //dispatch get user???
  } catch (err) {
    console.error(err)
  }
}

export const auth = (email, password, method) => async dispatch => {
  let res
  try {
    res = await axios.post(`/auth/${method}`, {email, password})
  } catch (authError) {
    return dispatch(getUser({error: authError}))
  }

  try {
    dispatch(getUser(res.data))
    history.push('/')
  } catch (dispatchOrHistoryErr) {
    console.error(dispatchOrHistoryErr)
  }
}

export const logout = () => async dispatch => {
  try {
    await axios.post('/auth/logout')
    dispatch(removeUser())
    history.push('/')
  } catch (err) {
    console.error(err)
  }
}

/**
 * REDUCER
 */
export default function(state = defaultUser, action) {
  switch (action.type) {
    case GET_USER:
      return action.user
    case REMOVE_USER:
      return defaultUser
    default:
      return state
  }
}
