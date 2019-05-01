import { createEmptyBlock } from './blockUtils'
import { createPosition } from './positionUtils'

export const generateEmptyGrid = (MAX_ROW, MAX_COLUMN) => {
  const result = new Array(MAX_ROW)
  for (let row = 0; row < MAX_ROW; row++) {
    result[row] = new Array(MAX_COLUMN)
    for (let column = 0; column < MAX_COLUMN; column++) {
      result[row][column] = createEmptyBlock({ position: createPosition(row, column) })
    }
  }
  return result
}

export const updateGridPosition = (grid, { row, column }, block) => {
  const newGrid = grid

  newGrid[row][column] = block

  return newGrid
}
