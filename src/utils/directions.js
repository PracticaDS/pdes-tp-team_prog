export const DOWN = 'Down'
export const UP = 'Up'
export const RIGHT = 'Right'
export const LEFT = 'Left'

export const applyDirection = (position, direction) => {
  if (direction === 'UP') return { ...position, row: position.row - 1 }
  if (direction === 'RIGHT') return { ...position, column: position.column + 1 }
  if (direction === 'DOWN') return { ...position, row: position.row + 1 }
  return { ...position, column: position.column - 1 }
}

<<<<<<< HEAD
export const isPositionValid = ({ row, column }, { n, m }) =>
  row < n && row >= 0 && column >= 0 && column < m
=======
const NextDirection = {
  RIGHT: DOWN,
  DOWN: LEFT,
  LEFT: UP,
  UP: RIGHT,
}

export const GetNextDirection = Direction => NextDirection[Direction]
>>>>>>> Fix - merge conflicts
