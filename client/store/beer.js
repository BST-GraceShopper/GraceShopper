import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const GET_BEERS = 'GET_BEERS'
const ADD_BEER = 'ADD_BEER'
const EDIT_BEER = 'EDIT_BEER'
const REMOVE_BEER = 'REMOVE_BEER'

/**
 * INITIAL STATE
 */
const defaultbeers = []

/**
 * ACTION CREATORS
 */
const _getbeers = beers => ({type: GET_BEERS, beers})
const _addBeer = beer => ({type: ADD_BEER, beer})
const _editBeer = beer => ({type: EDIT_BEER, beer})
const _removeBeer = beer => ({type: REMOVE_BEER, beer})

/**
 * THUNK CREATORS
 */
export const getBeers = () => async dispatch => {
  try {
    const beers = (await axios.get('/api/beers')).data
    dispatch(_getbeers(beers))
  } catch (err) {
    console.error(err)
  }
}

export const addBeer = id => async dispatch => {
  // try {
  //   const beers = (await axios.post('/api/beers/:id')).data
  //   dispatch(_addBeer(beer))
  // } catch (err) {
  //   console.error(err)
  // }
}
export const editBeer = beer => async dispatch => {
  try {
    const updatedBeer = (await axios.put(`/api/beers/${beer.productId}`, beer))
      .data
    dispatch(_editBeer(updatedBeer))
  } catch (err) {
    console.error(err)
  }
}

export const removeBeer = beerId => async dispatch => {
  try {
    console.log(beerId)
    await axios.delete(`/api/beers/${beerId}`)
    dispatch(_removeBeer(beerId))
  } catch (err) {
    console.error(err)
  }
}

/**
 * REDUCER
 */
export default function(state = defaultbeers, action) {
  switch (action.type) {
    case GET_BEERS:
      return action.beers
    case ADD_BEER:
      return [...state, action.beer]
    case EDIT_BEER:
      return state.map(beer => {
        if (beer.id === action.beer.id) {
          return action.beer
        } else return beer
      })
    case REMOVE_BEER:
      console.log(action.beer, 'in reducer remove')
      return state.filter(beerItem => beerItem.id !== action.beer)
    default:
      return state
  }
}
