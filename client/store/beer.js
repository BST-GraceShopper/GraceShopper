import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const GET_BEERS = 'GET_BEERS'

/**
 * INITIAL STATE
 */
const defaultBeers = []

/**
 * ACTION CREATORS
 */
const _getBeers = beers => ({type: GET_BEERS, beers})

/**
 * THUNK CREATORS
 */
export const getBeers = () => async dispatch => {
  try {
    const wines = (await axios.get('/api/wines')).data
    console.log(wines)
    dispatch(_getBeers(wines))
  } catch (err) {
    console.error(err)
  }
}

/**
 * REDUCER
 */
export default function(state = defaultBeers, action) {
  switch (action.type) {
    case GET_BEERS:
      return action.beers
    default:
      return state
  }
}
