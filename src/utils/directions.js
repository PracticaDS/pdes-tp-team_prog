export const applyDirection = (position, direction) => {
  if (direction === 'UP') return { ...position, row: position.row - 1 }
  if (direction === 'RIGHT') return { ...position, column: position.column + 1 }
  if (direction === 'DOWN') return { ...position, row: position.row + 1 }
  return { ...position, column: position.column - 1 }
}
