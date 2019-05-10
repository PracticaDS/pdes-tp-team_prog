import React from 'react'
import { Card, CardMedia } from '@material-ui/core'
import crafter from '../../../assets/crafter.png'
import { applyDirection, isPositionValid } from '../../../utils/directions'

const CrafterMachineNode = () => (
  <Card>
    <CardMedia component="img" image={crafter} />
  </Card>
)

const areAllMaterials = (necessaryMaterials, currentMaterials) =>
  necessaryMaterials.every(materialRecipe => {
    const materialInGrid = currentMaterials[materialRecipe.material.name]
    return materialInGrid && materialInGrid.quantity >= materialRecipe.quantity
  })

const materialsFiltered = (necessaryMaterials, currentMaterials) =>
  necessaryMaterials.map(materialRecipe => {
    const materialInGrid = currentMaterials[materialRecipe.material.name]
    return { ...materialInGrid, quantity: materialRecipe.quantity }
  })

class CrafterMachineNodeStateful extends React.Component {
  componentWillUpdate(prevProps) {
    const {
      tick,
      node: { machine, position, items },
      createRawMaterial,
      dimensions,
      deleteItems,
    } = this.props
    const updatedTick = prevProps.tick
    const {
      frequency,
      direction,
      metadata: {
        recipeSelected: { result, necessaryMaterials },
      },
    } = machine

    if (updatedTick !== tick && tick % frequency === 0) {
      const outputPosition = applyDirection(position, direction)
      if (
        isPositionValid(outputPosition, dimensions) &&
        areAllMaterials(necessaryMaterials, items)
      ) {
        deleteItems(position, materialsFiltered(necessaryMaterials, items))
        createRawMaterial(outputPosition, { ...result.material, quantity: result.quantity })
      }
    }
  }

  render() {
    return <CrafterMachineNode {...this.props} />
  }
}

export default CrafterMachineNodeStateful
