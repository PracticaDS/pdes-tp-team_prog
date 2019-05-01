import {
  UPDATE_BLOCK,
  DELETE_BLOCK,
  CREATE_RAW_MATERIAL,
  CREATE_ITEMS,
  DELETE_ITEMS,
} from '../utils/actionTypes'

export const updateBlock = (position, machine) => ({
  type: UPDATE_BLOCK,
  body: { position, machine },
})

export const createRawMaterial = (position, material) => ({
  type: CREATE_RAW_MATERIAL,
  body: { position, material },
})

export const deleteBlock = position => ({
  type: DELETE_BLOCK,
  body: { position },
})

export const createItems = (position, items) => ({
  type: CREATE_ITEMS,
  body: { position, items },
})

export const deleteItems = (position, items) => ({
  type: DELETE_ITEMS,
  body: { position, items },
})
