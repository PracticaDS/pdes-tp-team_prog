const gameState = state => state.GameState
export const getCurrency = state => gameState(state).currency
export const machineSelected = state => gameState(state).machineSelected
export const actionSelected = state => gameState(state).actionSelected
