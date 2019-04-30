import { Grid as reducer } from './Grid'
import { Empty } from '../utils/machineUtils'
import { updateBlock, deleteBlock } from '../actions/Grid'

const createInitialState = (n = 1, m = 1) => ({
  dimensions: { n, m },
  gridValues: Array(n).fill(Array(m).fill({ type: Empty })),
})

const createEmptyBlock = () => ({ type: 'Empty' })
const createStarterBlock = () => ({ type: 'Starter' })

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
})
