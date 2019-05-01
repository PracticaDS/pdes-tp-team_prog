import { Grid as reducer } from './Grid'
import { Empty } from '../utils/machineUtils'
import { updateBlock, deleteBlock, moveBlock } from '../actions/Grid'

const createInitialBlockState = (position, machine = { type: Empty }, items = {}) => ({
  position,
  machine,
  items,
})

const generateGrid = (MAX_ROW, MAX_COLUMN) => {
  const result = new Array(MAX_ROW)
  for (let row = 0; row < MAX_ROW; row++) {
    result[row] = new Array(MAX_COLUMN)
    for (let column = 0; column < MAX_COLUMN; column++) {
      result[row][column] = createInitialBlockState({ row, column })
    }
  }
  return result
}

const createInitialState = (n = 1, m = 1) => ({
  dimensions: { n, m },
  gridValues: generateGrid(n, m),
})

const createMachine = (machine = { type: 'Empty', direction: 'DOWN' }) => ({ machine })
const createEmptyBlock = () => createMachine()
const createStarterBlock = () => createMachine({ type: 'Starter', direction: 'DOWN' })

describe('grid reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(createInitialState(10, 10))
  })

  it('should update the block in row = 0 and column = 0 with a starter machine', () => {
    const initialState = createInitialState(1, 1)
    const updateBlockAction = updateBlock({ row: 0, column: 0 }, 'Starter')
    const actualState = reducer(initialState, updateBlockAction)

    const expectedState = initialState
    expectedState.gridValues[0][0] = createStarterBlock()

    expect(actualState).toEqual(expectedState)
  })

  it('should keep the same machine when update the same block two times with the same machine', () => {
    const initialState = createInitialState(1, 1)
    const updateBlockAction = updateBlock({ row: 0, column: 0 }, 'Starter')
    const firstState = reducer(initialState, updateBlockAction)
    const lastState = reducer(firstState, updateBlockAction)
    const expectedState = initialState
    expectedState.gridValues[0][0] = createStarterBlock()

    expect(lastState).toEqual(expectedState)
  })

  it('should modify the machine when update the block with a different machine', () => {
    const initialState = createInitialState(1, 1)
    const updateBlockWithStarterAction = updateBlock({ row: 0, column: 0 }, 'Starter')
    const firstState = reducer(initialState, updateBlockWithStarterAction)

    const updateBlockWithEmptyAction = updateBlock({ row: 0, column: 0 }, 'Empty')
    const lastState = reducer(firstState, updateBlockWithEmptyAction)

    const expectedState = initialState
    expectedState.gridValues[0][0] = createEmptyBlock()

    expect(lastState).toEqual(expectedState)
  })

  it('should delete the block which contains a machine', () => {
    const initialState = createInitialState(1, 1)
    const updateBlockAction = updateBlock({ row: 0, column: 0 }, 'Starter')
    const firstState = reducer(initialState, updateBlockAction)

    const deleteAction = deleteBlock({ row: 0, column: 0 })
    const lastState = reducer(firstState, deleteAction)

    const expectedState = initialState
    expectedState.gridValues[0][0] = createEmptyBlock()

    expect(lastState).toEqual(expectedState)
  })

  describe('#moveSelectBlock', () => {
    describe('When the current node is Empty', () => {
      const initialState = createInitialState(2, 2)
      it('should update the type of machine', () => {
        const action = moveBlock(
          { position: { row: 1, column: 1 }, machine: { type: 'bla' } },
          { row: 1, column: 1 },
        )
        const newState = reducer(initialState, action)
        expect(newState.gridValues[1][1].machine.type).toEqual('bla')
      })
    })
  })
})
