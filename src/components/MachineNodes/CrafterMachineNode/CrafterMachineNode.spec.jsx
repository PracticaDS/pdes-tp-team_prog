import React from 'react'
import { shallow } from 'enzyme'
import CrafterMachineNode, { areAllMaterials, materialsFiltered } from './CrafterMachineNode'
import { crafterMachine, copperMaterial, zincMaterial } from '../../Game/Game.constants'

describe('CrafterMachineNode Suite', () => {
  describe('Basic rendering', () => {
    let machine
    let position
    let items
    let tick
    let node
    let createRawMaterial
    let dimensions
    let deleteItems
    let props

    beforeEach(() => {
      machine = crafterMachine
      position = { n: 1, m: 1 }
      items = []
      tick = 1
      deleteItems = jest.fn()
      createRawMaterial = jest.fn()
      dimensions = { n: 1, m: 1 }
      node = { machine, position, items }
      props = {
        tick,
        deleteItems,
        createRawMaterial,
        dimensions,
        node,
      }
    })

    it('render simple CrafterMachineNode component', () => {
      const crafterMachineNode = shallow(<CrafterMachineNode {...props} />)
      expect(crafterMachineNode).toBeDefined()
    })
  })
})

describe('#areAllMaterials', () => {
  const necessaryMaterials = [
    {
      material: copperMaterial,
      quantity: 2,
    },
    {
      material: zincMaterial,
      quantity: 2,
    },
  ]
  describe('when there are enough materials', () => {
    const currentMaterials = {
      Zinc: { quantity: 2 },
      Copper: { quantity: 3 },
    }
    it('should be true', () => {
      expect(areAllMaterials(necessaryMaterials, currentMaterials)).toBeTruthy()
    })
  })

  describe('when there are not enough materials', () => {
    const currentMaterials = {
      Zinc: { quantity: 2 },
      Copper: { quantity: 1 },
    }
    it('should be false', () => {
      expect(areAllMaterials(necessaryMaterials, currentMaterials)).toBeFalsy()
    })
  })
})

describe('#materialsFiltered', () => {
  const necessaryMaterials = [
    { material: copperMaterial, quantity: 1 },
    { material: zincMaterial, quantity: 2 },
  ]

  const currentMaterials = {
    Zinc: { name: 'Zinc', quantity: 3 },
    Copper: { name: 'Copper', quantity: 4 },
  }
  it('should create a object with materials', () => {
    expect(materialsFiltered(necessaryMaterials, currentMaterials)).toEqual([
      { name: 'Copper', quantity: 1 },
      { name: 'Zinc', quantity: 2 },
    ])
  })
})
