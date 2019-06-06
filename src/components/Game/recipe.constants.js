import {
  billonMaterial,
  bronzeMaterial,
  chineseSilverMaterial,
  copperMaterial,
  goldMaterial,
  silverMaterial,
  whiteGoldMaterial,
  zincMaterial,
} from './material.constants'

export const whiteGoldRecipe = {
  name: 'White Gold Recipe',
  necessaryMaterials: [
    {
      material: goldMaterial,
      quantity: 2,
    },
    {
      material: silverMaterial,
      quantity: 1,
    },
    {
      material: copperMaterial,
      quantity: 1,
    },
  ],
  price: whiteGoldMaterial.price,
  result: {
    material: whiteGoldMaterial,
    quantity: 1,
  },
}

export const chineseSilverRecipe = {
  name: 'Chinese Silver Recipe',
  necessaryMaterials: [
    {
      material: copperMaterial,
      quantity: 2,
    },
    {
      material: zincMaterial,
      quantity: 2,
    },
  ],
  price: chineseSilverMaterial.price,
  result: {
    material: chineseSilverMaterial,
    quantity: 1,
  },
}

export const bronzeRecipe = {
  name: 'Bronze Recipe',
  necessaryMaterials: [
    {
      material: copperMaterial,
      quantity: 1,
    },
    {
      material: zincMaterial,
      quantity: 1,
    },
  ],
  price: bronzeMaterial.price,
  result: {
    material: bronzeMaterial,
    quantity: 2,
  },
}

export const billonRecipe = {
  name: 'Billon Recipe',
  necessaryMaterials: [
    {
      material: bronzeMaterial,
      quantity: 1,
    },
    {
      material: silverMaterial,
      quantity: 1,
    },
  ],
  price: billonMaterial.price,
  result: {
    material: billonMaterial,
    quantity: 1,
  },
}

export const recipes = [bronzeRecipe, billonRecipe, chineseSilverRecipe, whiteGoldRecipe]
