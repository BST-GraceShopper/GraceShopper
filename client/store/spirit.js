import axios from 'axios'

//ACTION TYPES
const GET_SPIRITS = 'GET_SPIRITS'

//INITIAL STATE
const defaultSpirits = []

//ACTION CREATORS
const _getSpirits = spirits => ({type: GET_SPIRITS, spirits})

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

//REDUCER
export default function(state = defaultSpirits, action) {
  switch (action.type) {
    case GET_SPIRITS:
      return action.spirits
    default:
      return state
  }
}
