import { UPDATE_BLOCK } from '../utils/actionTypes'

export const updateBlock = ({ row, column }, machineType) => ({
  type: UPDATE_BLOCK,
  body: { row, column, machineType },
})
