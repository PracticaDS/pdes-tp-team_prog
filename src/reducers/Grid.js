import { DEFAULT_DIMENSIONS } from '../utils/defaultValues'
import { UPDATE_BLOCK, DELETE_BLOCK } from '../utils/actionTypes'
import { Empty } from '../utils/machineUtils'

const initialState = {
  dimensions: DEFAULT_DIMENSIONS,
  gridValues: Array(DEFAULT_DIMENSIONS.m).fill(Array(DEFAULT_DIMENSIONS.n).fill({ type: Empty })),
}

const updateBlock = (state, { row, column, machineType }) => ({
  ...state,
  gridValues: [
    ...state.gridValues.slice(0, row),
    [
      ...state.gridValues[row].slice(0, column),
      { type: machineType },
      ...state.gridValues[row].slice(column + 1),
    ],
    ...state.gridValues.slice(row + 1),
  ],
})

const deletePosition = (gridValues, { row, column }) => {
  const oldGridValues = gridValues

  oldGridValues[row] = oldGridValues[row].map((value, index) => {
    if (index === column) return { type: Empty }
    return value
  })

  return oldGridValues
}

const deleteBlock = (state, { row, column }) => ({
  ...state,
  gridValues: deletePosition(state.gridValues, { row, column }),
})

const ACTION_HANDLER_TYPES = {
  [UPDATE_BLOCK]: updateBlock,
  [DELETE_BLOCK]: deleteBlock,
}

export const Grid = (state = initialState, { type, body }) => {
  const handler = ACTION_HANDLER_TYPES[type]
  return handler ? handler(state, body) : state
}
