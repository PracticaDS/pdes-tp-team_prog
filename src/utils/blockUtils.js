import { createEmptyMachine, createStarterMachine } from './machineUtils'

export const createEmptyBlock = ({ position, items = {} }) => ({
  position,
  machine: createEmptyMachine(),
  items,
})

export const createStarterBlock = ({ position, machine, items = {} }) => ({
  position,
  machine: machine || createStarterMachine({}),
  items,
})

// @Param block
// @Param item
export const updateBlockWithItem = ({ position, machine, items = {} }, item) => ({
  position,
  machine,
  items: {
    ...items,
    [item.name]: item,
  },
})
