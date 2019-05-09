/* eslint-disable no-use-before-define */
import crafter from '../../assets/crafter.png'
import furnace from '../../assets/furnace.png'
import seller from '../../assets/seller.png'
import starter from '../../assets/starter.png'
import transporter from '../../assets/transporter.png'
// Material images
import gold from '../../assets/gold.png'
import iron from '../../assets/iron.png'
import silver from '../../assets/silver.png'
import copper from '../../assets/copper.png'
import bronze from '../../assets/bronze.png'
import zinc from '../../assets/zinc.png'
import whiteGold from '../../assets/whiteGold.png'
import chineseSilver from '../../assets/chineseSilver.png'
//
import deleteOption from '../../assets/delete.png'
import rotateOption from '../../assets/rotate.png'
import moveOption from '../../assets/move.png'

import { Starter, Seller, Crafter, Furnace, Transporter } from '../../utils/machineUtils'
import { DOWN } from '../../utils/directions'

export const starterMachine = {
  id: 1,
  image: starter,
  name: 'Starter',
  type: Starter,
  buy: 800,
  sell: 400,
  frequency: 1,
  direction: DOWN,
  metadata: {
    selectedMaterial: null,
    availableMaterials: [],
  },
  process(materials, func) {
    func(this.direction, [], [{ ...this.metadata.selectedMaterial, frequency: this.frequency }])
  },
}

export const sellerMachine = {
  id: 2,
  image: seller,
  name: 'Seller',
  type: Seller,
  buy: 1000,
  sell: 500,
  frequency: 1,
  direction: DOWN,
  process: (materials, func) => {
    func(null, materials, { name: 'currency' })
  },
}

export const crafterMachine = {
  id: 3,
  image: crafter,
  name: 'Crafter',
  type: Crafter,
  buy: 800,
  sell: 400,
  frequency: 1,
  direction: DOWN,
  metadata: {
    recipeSelected: {
      materialsRequired: [{ name: 'harina', quantity: 1 }, { name: 'agua', quantity: 2 }],
      product: {
        name: 'pan',
      },
    },
    availableRecipes: [{ required: ['harina', 'agua'], product: 'pan' }],
  },
  process: (materials, func) => {
    func(this.direction, this.metadata.recipeSelected.materialsRequired, [
      { ...this.metadata.recipeSelected.product, quantity: this.frequency },
    ])
  },
}

export const furnaceMachine = {
  id: 4,
  image: furnace,
  name: 'Furnace',
  type: Furnace,
  buy: 800,
  sell: 400,
  frequency: 1,
  direction: DOWN,
  metadata: {
    recipeSelected: {
      materialsRequired: [{ name: 'gold', quantity: 1 }],
      product: {
        name: 'liquid_gold',
      },
    },
    availableRecipes: [
      { materialsRequired: [{ name: 'gold', quantity: 1 }], product: 'liquid_gold' },
      { materialsRequired: [{ name: 'silver', quantity: 1 }], product: 'liquid_silver' },
    ],
  },
  process: (materials, func) => {
    // los materiales estan incluidos en los requeridos de la receta
    func(this.direction, this.metadata.recipeSelected.materialsRequired, [
      { ...this.metadata.recipeSelected.product, quantity: this.frequency },
    ])
  },
}

export const transporterMachine = {
  id: 5,
  image: transporter,
  name: 'Transporter',
  type: Transporter,
  buy: 800,
  sell: 400,
  frequency: 1,
  direction: DOWN,
  process(materials, func) {
    func(this.direction, materials, materials)
  },
}

export const editionOptions = [
  {
    image: deleteOption,
    title: 'Delete',
  },
  {
    image: rotateOption,
    title: 'Rotate',
  },
  {
    image: moveOption,
    title: 'Move',
  },
]

const goldMaterial = {
  name: 'Gold',
  image: gold,
  price: 20,
}

const silverMaterial = {
  name: 'Silver',
  image: silver,
  price: 10,
}

const ironMaterial = {
  name: 'Iron',
  image: iron,
  price: 5,
}

const zincMaterial = {
  name: 'Zinc',
  image: zinc,
  price: 5,
}

const copperMaterial = {
  name: 'Copper',
  image: copper,
  price: 5,
}

// //////

const bronzeMaterial = {
  name: 'Bronze',
  image: bronze,
  price: 100,
}

const whiteGoldMaterial = {
  name: 'White Gold',
  image: whiteGold,
  price: 100,
}

const chineseSilverMaterial = {
  name: 'Chinese Silver',
  image: chineseSilver,
  price: 100,
}

const whiteGoldRecipe = {
  name: 'White Gold Recipe',
  necessaryMaterials: [
    {
      material: goldMaterial,
      count: 2,
    },
    {
      material: silverMaterial,
      count: 1,
    },
    {
      material: copperMaterial,
      count: 1,
    },
  ],
  currencyCost: 0,
  result: {
    material: whiteGoldMaterial,
    count: 1,
  },
}

const chineseSilverRecipe = {
  name: 'Chinese Silver Recipe',
  necessaryMaterials: [
    {
      material: copperMaterial,
      count: 2,
    },
    {
      material: zincMaterial,
      count: 2,
    },
  ],
  currencyCost: 0,
  result: {
    material: chineseSilverMaterial,
    count: 1,
  },
}

const bronzeRecipe = {
  name: 'Bronze Recipe',
  necessaryMaterials: [
    {
      material: copperMaterial,
      count: 1,
    },
    {
      material: zincMaterial,
      count: 1,
    },
  ],
  currencyCost: 0,
  result: {
    material: bronzeMaterial,
    count: 2,
  },
}

export const materials = [goldMaterial, silverMaterial, zincMaterial, ironMaterial, copperMaterial]

export const recipes = [bronzeRecipe, chineseSilverRecipe, whiteGoldRecipe]

export const areEquals = (machine1, machine2) => machine1 && machine2 && machine1.id === machine2.id
