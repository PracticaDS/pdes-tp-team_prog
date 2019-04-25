const initialState = {
  dimensions: {
    n: 5, // defaults
    m: 5,
  },
}

export const Grid = (state = initialState, action) => {
  const { type } = action
  switch (type) {
    default:
      return state
  }
}
