const SARASA = 'BLA'
const initialState = {
  bla: 2,
}

const exampleHandlerFunction = (state, payload) => ({ ...state, bla: payload })
// TODO: THIS REDUCER IS A VERY SIMPLE EXAMPLE OF HOW WE WORK WITH REDUCERS
export const simpleReducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case `${SARASA}`:
      return exampleHandlerFunction(state, payload)
    default:
      return state
  }
}
