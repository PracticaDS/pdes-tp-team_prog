import { DEFAULT_DIMENSIONS } from '../utils/defaultValues'
import { UPDATE_BLOCK } from '../utils/actionTypes'
import { Empty } from '../utils/machineUtils'

const initialState = {
  dimensions: DEFAULT_DIMENSIONS,
  gridValues: Array(DEFAULT_DIMENSIONS.m).fill(Array(DEFAULT_DIMENSIONS.n).fill({ type: Empty })),
}

const updateBlock = (state, { row, column, machineType }) => {
  state.gridValues.splice(row, 1, [
    ...state.gridValues[row].slice(0, column),
    { type: machineType },
    ...state.gridValues[row].slice(column + 1),
  ])
  return state
}

const ACTION_HANDLER_TYPES = {
  [UPDATE_BLOCK]: updateBlock,
}

export const Grid = (state = initialState, { type, body }) => {
  const handler = ACTION_HANDLER_TYPES[type]
  return handler ? handler(state, body) : state
}
