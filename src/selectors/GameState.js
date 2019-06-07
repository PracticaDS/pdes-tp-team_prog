export const gameState = state => state.GameState
export const getCurrency = state => gameState(state).currency
export const machineSelected = state => gameState(state).machineSelected
export const actionSelected = state => gameState(state).actionSelected
export const getTick = state => gameState(state).tick
export const moveSelectedNode = state => gameState(state).moveSelectedNode
export const machineTypeSelected = state => gameState(state).machineTypeSelected
