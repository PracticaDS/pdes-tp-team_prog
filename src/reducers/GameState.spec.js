import { GameState as reducer } from './GameState'
import { deselectMoveBlock, selectMoveBlock } from '../actions/GameState'
import { SELECTION } from '../utils/editionUtils'

const initialState = {
  gameState: 'PAUSED',
  machineSelected: null,
  moveSelectedNode: null,
  actionSelected: SELECTION,
  currency: 0,
  tick: 0,
}

describe('GameState reducer', () => {
  describe('SELECT_MOVE_BLOCK action', () => {
    it('should set moveSelectedNode with the node passed', () => {
      const node = {}
      const action = selectMoveBlock(node, { row: 1, column: 1 })
      const state = reducer(initialState, action)
      expect(state.moveSelectedNode).toEqual({ ...node, position: { row: 1, column: 1 } })
    })
  })

  describe('DESELECT_MOVE_BLOCK action', () => {
    it('should set moveSelectedNode in null', () => {
      const state = reducer(initialState, deselectMoveBlock())
      expect(state.moveSelectedNode).toEqual(null)
    })
  })
})
