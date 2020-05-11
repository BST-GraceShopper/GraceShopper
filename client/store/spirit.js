import axios from 'axios'

//ACTION TYPES
const GET_SPIRITS = 'GET_SPIRITS'
const ADD_SPIRITS = 'ADD_SPIRITS'
const EDIT_SPIRITS = 'EDIT_SPIRITS'
const REMOVE_SPIRITS = 'REMOVE_SPIRITS'

//INITIAL STATE
const defaultSpirits = []

//ACTION CREATORS
const _getSpirits = spirits => ({type: GET_SPIRITS, spirits})
const _addSpirits = spirits => ({type: ADD_SPIRITS, spirits})
const _editSpirits = spirits => ({type: EDIT_SPIRITS, spirits})
const _removeSpirits = spirits => ({type: REMOVE_SPIRITS, spirits})

//THUNK CREATORS
export const getSpirits = () => async dispatch => {
  try {
    const spirits = (await axios.get('/api/spirits')).data
    console.log(spirits)
    dispatch(_getSpirits(spirits))
  } catch (err) {
    console.error(err)
  }
}

export const addSpirits = () => async dispatch => {
  // try {
  //   const spirits = (await axios.get('/api/spirits')).data
  //   console.log(spirits)
  //   dispatch(_addSpirits(spirits))
  // } catch (err) {
  //   console.error(err)
  // }
}

export const editSpirits = () => async dispatch => {
  // try {
  //   const spirits = (await axios.get('/api/spirits')).data
  //   console.log(spirits)
  //   dispatch(_editSpirits(spirits))
  // } catch (err) {
  //   console.error(err)
  // }
}

export const removeSpirits = () => async dispatch => {
  // try {
  //   const spirits = (await axios.get('/api/spirits')).data
  //   console.log(spirits)
  //   dispatch(_removeSpirits(spirits))
  // } catch (err) {
  //   console.error(err)
  // }
}

//REDUCER
export default function(state = defaultSpirits, action) {
  switch (action.type) {
    case GET_SPIRITS:
      return action.spirits
    case ADD_SPIRITS:
      return [...state, action.spirit]
    case EDIT_SPIRITS:
      return state
    case REMOVE_SPIRITS:
      return state.filter(spiritItem => spiritItem.id !== action.spirit.id)
    default:
      return state
  }
}
