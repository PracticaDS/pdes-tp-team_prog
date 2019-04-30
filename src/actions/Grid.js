import { UPDATE_BLOCK, DELETE_BLOCK } from '../utils/actionTypes'

export const updateBlock = ({ row, column }, machineType) => ({
  type: UPDATE_BLOCK,
  body: { row, column, machineType },
})

export const deleteBlock = ({ row, column }) => ({
  type: DELETE_BLOCK,
  body: { row, column },
})
