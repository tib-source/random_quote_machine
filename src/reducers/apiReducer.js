const initState = []

const GET = 'GET'
const ADD = 'ADD'

const apiReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD:
      return [...state, ...action.quotes]
    case GET:
      return state[action.index]
    default:
      return state
  }
}


export default apiReducer