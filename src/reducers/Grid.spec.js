import { Grid as reducer } from './Grid'
import { updateBlock, deleteBlock, moveBlock, createRawMaterial } from '../actions/Grid'
import { createEmptyBlock, createStarterBlock, updateBlockWithItem } from '../utils/blockUtils'
import { generateEmptyGrid, updateGridPosition } from '../utils/gridUtils'
import { createPosition } from '../utils/positionUtils'
import { createEmptyMachine, createStarterMachine } from '../utils/machineUtils'
import { createMaterial } from '../utils/materialUtils'

const createInitialState = (rows = 1, columns = 1) => ({
  dimensions: { n: rows, m: columns },
  gridValues: generateEmptyGrid(rows, columns),
})

describe('grid reducer', () => {
  const initialState = createInitialState(2, 2)
  const position = createPosition(0, 0)

  describe('emptyReducer', () => {
    it('should return the initial state', () => {
      expect(reducer(undefined, {})).toEqual(createInitialState(10, 10))
    })
  })

  describe('when we modify the grid in a invalid position it should throw an exception', () => {
    const invalidPosition = createPosition(-1, -1)
    const invalidUpdateBlockAction = updateBlock(invalidPosition, createStarterMachine({}))

    it('should return the initial state', () => {
      expect(() => {
        reducer(initialState, invalidUpdateBlockAction)
      }).toThrow()
    })
  })

  describe('updateBlock', () => {
    const updateBlockAction = updateBlock(position, createStarterMachine({}))
    const actualState = reducer(initialState, updateBlockAction)

    describe('When we set a starter machine in the position 0 0', () => {
      const expectedState = initialState
      expectedState.gridValues = updateGridPosition(
        expectedState.gridValues,
        position,
        createStarterBlock({ position }),
      )

      it('should update the block in row = 0 and column = 0 with a starter machine', () => {
        expect(actualState).toEqual(expectedState)
      })
    })

    describe('When we set the same starter machine two times in the block in the position 0 0', () => {
      const firstState = reducer(initialState, updateBlockAction)
      const lastState = reducer(firstState, updateBlockAction)
      const expectedState = initialState
      expectedState.gridValues = updateGridPosition(
        expectedState.gridValues,
        position,
        createStarterBlock({ position }),
      )
      it('should let the starter machine in that position', () => {
        expect(lastState).toEqual(expectedState)
      })
    })

    describe('When we update the block in position 0 0 which has a starter machine with a empty block', () => {
      const updateBlockWithStarterAction = updateBlock(position, createStarterMachine({}))
      const firstState = reducer(initialState, updateBlockWithStarterAction)
      const updateBlockWithEmptyAction = updateBlock(position, createEmptyMachine())
      const lastState = reducer(firstState, updateBlockWithEmptyAction)

      it('should let a empty machine in that block', () => {
        const expectedState = initialState
        expectedState.gridValues = updateGridPosition(
          expectedState.gridValues,
          position,
          createEmptyBlock({}),
        )
        expect(lastState).toEqual(expectedState)
      })
    })
  })

  describe('deleteBlock', () => {
    const updateBlockAction = updateBlock(position, createStarterMachine({}))
    const firstState = reducer(initialState, updateBlockAction)

    describe('When we delete a block which has a starter machine', () => {
      const deleteAction = deleteBlock(position)
      const lastState = reducer(firstState, deleteAction)

      it('should delete the block which contains a machine', () => {
        const expectedState = initialState
        expectedState.gridValues = updateGridPosition(
          expectedState.gridValues,
          position,
          createEmptyBlock({}),
        )
        expect(lastState).toEqual(expectedState)
      })
    })
  })

  describe('#moveSelectBlock', () => {
    describe('When the current node is Empty', () => {
      it('should update the type of machine', () => {
        const action = moveBlock({ position, machine: { type: 'bla' } }, { row: 1, column: 1 })
        const newState = reducer(initialState, action)

        expect(newState.gridValues[1][1].machine.type).toEqual('bla')
      })
    })
  })

  describe('addMaterial', () => {
    const material = createMaterial({ name: 'agua' })
    const createMaterialAction = createRawMaterial(position, material)

    describe('When we create a raw material in an Empty node with no items', () => {
      const newState = reducer(initialState, createMaterialAction)
      const expectedState = initialState

      it('should add the material to the items in the node', () => {
        const newBlock = updateBlockWithItem(createEmptyBlock({}), { ...material, quantity: 1 })
        expectedState.gridValues = updateGridPosition(expectedState.gridValues, position, newBlock)

        expect(newState).toEqual(expectedState)
      })
    })
    describe('When we create a agua material two times in an Empty node with items', () => {
      const oneItemState = reducer(initialState, createMaterialAction)
      const expectedState = initialState
      const twoItemsState = reducer(oneItemState, createMaterialAction)

      it('should let the material agua with quantity = 2 in the node items', () => {
        const newBlock = updateBlockWithItem(createEmptyBlock({}), { ...material, quantity: 2 })
        expectedState.gridValues = updateGridPosition(expectedState.gridValues, position, newBlock)

        expect(twoItemsState).toEqual(expectedState)
      })
    })
  })
})
