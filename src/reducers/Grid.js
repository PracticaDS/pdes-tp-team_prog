import { DEFAULT_DIMENSIONS } from '../utils/defaultValues'

const initialState = {
  dimensions: DEFAULT_DIMENSIONS,
}

export const Grid = (state = initialState, action) => {
  const { type } = action
  switch (type) {
    default:
      return state
  }
}
