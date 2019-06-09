import { DEFAULT_DIMENSIONS } from '../utils/defaultValues'
import {
  UPDATE_BLOCK,
  DELETE_BLOCK,
  CREATE_RAW_MATERIAL,
  CREATE_ITEMS,
  DELETE_ITEMS,
  MOVE_BLOCK,
  ROTATE_BLOCK,
  PLAY_GAME_SUCCESS,
} from '../utils/actionTypes'
import { Empty } from '../utils/machineUtils'
import { generateEmptyGrid } from '../utils/gridUtils'

import { DOWN, UP, LEFT, RIGHT } from '../utils/directions'

const NextDirection = {
  Right: DOWN,
  Down: LEFT,
  Left: UP,
  Up: RIGHT,
}

const nextDirection = Direction => NextDirection[Direction]

const initialState = {
  dimensions: DEFAULT_DIMENSIONS,
  gridValues: generateEmptyGrid(10, 10),
}

const modifyBlock = (gridValues, { row, column }, func) => {
  const oldGridValues = gridValues

  oldGridValues[row] = gridValues[row].map((block, index) =>
    index === column ? func(block) : block,
  )
  return oldGridValues
}

const setMachine = machine => block => ({
  ...block,
  machine,
})

const updateBlock = (state, { position, machine }) => ({
  ...state,
  gridValues: modifyBlock(state.gridValues, position, setMachine(machine)),
})

const deleteBlock = (state, { position }) =>
  updateBlock(state, { position, machine: { type: Empty } })

// @TODO falta arreglar cuando el material tenga mas datos, solo le estamos seteando el name y quantity
// @TODO 2: pasar el comentario a ingles

const addMaterial = material => block => ({
  ...block,
  items: {
    ...block.items,
    [material.name]: {
      ...block.items[material.name],
      name: material.name,
      quantity: block.items[material.name]
        ? block.items[material.name].quantity + material.quantity
        : material.quantity,
      price: material.price,
      type: material.type,
    },
  },
})

const createRawMaterial = (state, { position, material }) => ({
  ...state,
  gridValues: modifyBlock(state.gridValues, position, addMaterial(material)),
})

const sumItems = (dictItems, currentListItems) => {
  currentListItems.forEach(({ name, quantity, type, price }) => {
    if (!dictItems[name]) {
      dictItems[name] = { name, quantity, type, price }
    } else {
      dictItems[name].quantity += quantity
    }
  })

  return dictItems
}

const createItemsInBlock = items => block => ({
  ...block,
  items: sumItems(block.items, items),
})

const createItems = (state, { position, items }) => ({
  ...state,
  gridValues: modifyBlock(state.gridValues, position, createItemsInBlock(items)),
})

const subsItems = (dictItems, listItems) => {
  listItems.forEach(({ name, quantity }) => {
    if (dictItems[name] && dictItems[name].quantity && dictItems[name].quantity > quantity) {
      dictItems[name].quantity -= quantity
    } else {
      delete dictItems[name]
    }
  })

  return dictItems
}

const deleteItemsInBlock = items => block => ({
  ...block,
  items: subsItems(block.items, items),
})

const deleteItems = (state, { position, items }) => ({
  ...state,
  gridValues: modifyBlock(state.gridValues, position, deleteItemsInBlock(items)),
})

const moveSelectBlock = (state, { moveSelectedNode, newSelectedNode: { row, column } }) => {
  const { gridValues } = state
  const currentNode = gridValues[row][column]

  if (currentNode.machine.type === Empty) {
    const partialState = deleteBlock(state, {
      position: {
        row: moveSelectedNode.position.row,
        column: moveSelectedNode.position.column,
      },
    })
    return updateBlock(partialState, {
      position: { row, column },
      machine: moveSelectedNode.machine,
    })
  }

  return state
}
const rotatePositionOfBlock = block => ({
  ...block,
  machine: {
    ...block.machine,
    direction: nextDirection(block.machine.direction),
  },
})

const rotateBlock = (state, { position }) => ({
  ...state,
  gridValues: modifyBlock(state.gridValues, position, rotatePositionOfBlock),
})

const playGame = (state, { factory: { dimensions, gridValues } }) => ({
  ...state,
  dimensions,
  gridValues,
})

const ACTION_HANDLER_TYPES = {
  [UPDATE_BLOCK]: updateBlock,
  [DELETE_BLOCK]: deleteBlock,
  [CREATE_RAW_MATERIAL]: createRawMaterial,
  [CREATE_ITEMS]: createItems,
  [DELETE_ITEMS]: deleteItems,
  [MOVE_BLOCK]: moveSelectBlock,
  [ROTATE_BLOCK]: rotateBlock,
  [PLAY_GAME_SUCCESS]: playGame,
}

export const Grid = (state = initialState, { type, body }) => {
  const handler = ACTION_HANDLER_TYPES[type]
  return handler ? handler(state, body) : state
}
