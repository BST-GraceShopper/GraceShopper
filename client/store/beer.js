import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const GET_beers = 'GET_beers'
const ADD_beer = 'ADD_beer'
const EDIT_beer = 'EDIT_beer'
const REMOVE_beer = 'REMOVE_beer'

/**
 * INITIAL STATE
 */
const defaultbeers = []

/**
 * ACTION CREATORS
 */
const _getbeers = beers => ({type: GET_beers, beers})
const _addbeer = beers => ({type: ADD_beer, beer})
const _editbeer = beers => ({type: EDIT_beer, beer})
const _removebeer = beers => ({type: REMOVE_beer, beer})

/**
 * THUNK CREATORS
 */
export const getBeers = () => async dispatch => {
  try {
    const beers = (await axios.get('/api/beers')).data
    console.log(beers)
    dispatch(_getbeers(beers))
  } catch (err) {
    console.error(err)
  }
}

export const addbeer = () => async dispatch => {
  // try {
  //   const beers = (await axios.get('/api/beers')).data
  //   console.log(beers)
  //   dispatch(_getbeers(beers))
  // } catch (err) {
  //   console.error(err)
  // }
}
export const editbeer = () => async dispatch => {
  // try {
  //   const beers = (await axios.get('/api/beers')).data
  //   console.log(beers)
  //   dispatch(_getbeers(beers))
  // } catch (err) {
  //   console.error(err)
  // }
}
export const removebeer = () => async dispatch => {
  // try {
  //   const beers = (await axios.get('/api/beers')).data
  //   console.log(beers)
  //   dispatch(_getbeers(beers))
  // } catch (err) {
  //   console.error(err)
  // }
}

/**
 * REDUCER
 */
export default function(state = defaultbeers, action) {
  switch (action.type) {
    case GET_beers:
      return action.beers
    case ADD_beer:
      return [...state, action.beer]
    case EDIT_beer:
      return state
    case REMOVE_beer:
      return state.filter(beerItem => beerItem.id !== action.beer.id)
    default:
      return state
  }
}
