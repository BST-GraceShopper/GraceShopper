import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const GET_WINES = 'GET_WINES'

/**
 * INITIAL STATE
 */
const defaultWines = []

/**
 * ACTION CREATORS
 */
const _getWines = wines => ({type: GET_WINES, wines})

/**
 * THUNK CREATORS
 */
export const getWines = () => async dispatch => {
  try {
    const wines = (await axios.get('/api/wines')).data
    console.log(wines)
    dispatch(_getWines(wines))
  } catch (err) {
    console.error(err)
  }
}

/**
 * REDUCER
 */
export default function(state = defaultWines, action) {
  switch (action.type) {
    case GET_WINES:
      return action.wines
    default:
      return state
  }
}
