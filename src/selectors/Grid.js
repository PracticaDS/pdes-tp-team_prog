export const currentNodes = state => state.Grid.gridValues
export const selectMachineNode = (state, { row, column }) => currentNodes(state)[row][column]
export const selectDimensions = state => state.Grid.dimensions
export const getGrid = state => state.Grid
