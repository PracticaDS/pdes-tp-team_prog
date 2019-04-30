import { DEFAULT_DIMENSIONS } from '../utils/defaultValues'
import { UPDATE_BLOCK, DELETE_BLOCK } from '../utils/actionTypes'
import { Empty } from '../utils/machineUtils'

const initialState = {
  dimensions: DEFAULT_DIMENSIONS,
  gridValues: Array(DEFAULT_DIMENSIONS.m).fill(Array(DEFAULT_DIMENSIONS.n).fill({ type: Empty })),
}

const update = (gridValues, { row, column, machineType }) => {
  const oldGridValues = gridValues

  oldGridValues[row] = oldGridValues[row].map((value, index) =>
    index === column ? { type: machineType } : value,
  )

  return oldGridValues
}

const updateBlock = (state, { row, column, machineType }) => ({
  ...state,
  gridValues: update(state.gridValues, { row, column, machineType }),
})

const deleteBlock = (state, { row, column }) =>
  updateBlock(state, { row, column, machineType: Empty })

const ACTION_HANDLER_TYPES = {
  [UPDATE_BLOCK]: updateBlock,
  [DELETE_BLOCK]: deleteBlock,
}

export const Grid = (state = initialState, { type, body }) => {
  const handler = ACTION_HANDLER_TYPES[type]
  return handler ? handler(state, body) : state
}
