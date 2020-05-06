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
    const beers = (await axios.get('/api/beers')).data
    console.log(beers)
    dispatch(_getBeers(beers))
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
