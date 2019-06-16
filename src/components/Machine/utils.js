import { TIMER_TIME } from '../../utils/defaultValues'
import { isPositionValid } from '../../utils/directions'

const TIMEOUT_TIME = TIMER_TIME / 2

export const incrementCount = prevState => ({
  personalCount: prevState.personalCount + 1,
})

export const resetCount = () => ({
  personalCount: 0,
})

export const deactivate = () => ({
  isActive: false,
})

export const activate = () => ({
  isActive: true,
})

export const activateNode = () => ({
  ...resetCount(),
  ...activate(),
})

export const withTimeout = cb => {
  setTimeout(() => {
    cb()
  }, TIMEOUT_TIME)
}

export const areAllMaterials = (necessaryMaterials, currentMaterials) =>
  necessaryMaterials.every(materialRecipe => {
    const materialInGrid = currentMaterials[materialRecipe.material.name]
    return materialInGrid && materialInGrid.quantity >= materialRecipe.quantity
  })

export const materialsFiltered = (necessaryMaterials, currentMaterials) =>
  necessaryMaterials.map(materialRecipe => {
    const materialInGrid = currentMaterials[materialRecipe.material.name]
    return { ...materialInGrid, quantity: materialRecipe.quantity }
  })

export const hasNecessaryMaterials = (machine, items) => {
  const { metadata } = machine
  const { recipeSelected } = metadata
  const { necessaryMaterials } = recipeSelected

  return areAllMaterials(necessaryMaterials, items)
}

export const getItemsFromMaterials = (machine, items) => {
  const { metadata } = machine
  const { recipeSelected } = metadata
  const { necessaryMaterials } = recipeSelected

  return materialsFiltered(necessaryMaterials, items)
}

export const getCraftedMaterial = machine => {
  const { metadata } = machine
  const { recipeSelected } = metadata
  const { result } = recipeSelected
  const { material, quantity } = result

  return { material, quantity }
}

// machine - state
export const isFrequencyFinished = ({ node }, { personalCount }) =>
  node.machine && node.machine.frequency && node.machine.frequency <= personalCount

export const runCBInValidPosition = (position, dimensions, cb) => {
  if (isPositionValid(position, dimensions)) {
    cb()
  }
}
