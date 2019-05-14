/* eslint-disable no-use-before-define */
import crafter from '../../assets/crafter.png'
import furnace from '../../assets/furnace.png'
import seller from '../../assets/seller.png'
import starter from '../../assets/starter.png'
import transporter from '../../assets/transporter.png'
// Material images
import gold from '../../assets/gold.png'
import gold_melted from '../../assets/gold_melted.png'
import iron from '../../assets/iron.png'
import silver from '../../assets/silver.png'
import copper from '../../assets/copper.png'
import bronze from '../../assets/bronze.png'
import zinc from '../../assets/zinc.png'
import whiteGold from '../../assets/whiteGold.png'
import chineseSilver from '../../assets/chineseSilver.png'
import billon from '../../assets/billon.png'
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
  price: 800,
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
  price: 1000,
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
  price: 800,
  frequency: 1,
  direction: DOWN,
  metadata: {
    recipeSelected: null,
    availableRecipes: [],
  },
}

export const furnaceMachine = {
  id: 4,
  image: furnace,
  name: 'Furnace',
  type: Furnace,
  price: 800,
  frequency: 1,
  direction: DOWN,
}

export const transporterMachine = {
  id: 5,
  image: transporter,
  name: 'Transporter',
  type: Transporter,
  price: 800,
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

export const materialsImg = {
  Gold: gold,
  Silver: silver,
  Iron: iron,
  Zinc: zinc,
  Copper: copper,
  Bronze: bronze,
  'White Gold': whiteGold,
  'Chinese Silver': chineseSilver,
  Billon: billon,
  DEFAULT: silver,
  'Gold Melted': gold_melted,
  'Silver Melted': silver,
  'Iron Melted': iron,
  'Zinc Melted': zinc,
  'Copper Melted': copper,
  'Bronze Melted': bronze,
  'White Gold Melted': whiteGold,
  'Chinese Silver Melted': chineseSilver,
  'Billon Melted': billon,
}

export const goldMaterial = {
  name: 'Gold',
  image: gold,
  price: 20,
  type: 'metal',
}

export const silverMaterial = {
  name: 'Silver',
  image: silver,
  price: 10,
  type: 'metal',
}

export const ironMaterial = {
  name: 'Iron',
  image: iron,
  price: 5,
  type: 'metal',
}

export const zincMaterial = {
  name: 'Zinc',
  image: zinc,
  price: 5,
  type: 'metal',
}

export const copperMaterial = {
  name: 'Copper',
  image: copper,
  price: 5,
  type: 'metal',
}

// //////

export const bronzeMaterial = {
  name: 'Bronze',
  image: bronze,
  price: 100,
  type: 'metal',
}

export const whiteGoldMaterial = {
  name: 'White Gold',
  image: whiteGold,
  price: 100,
  type: 'metal',
}

export const chineseSilverMaterial = {
  name: 'Chinese Silver',
  image: chineseSilver,
  price: 100,
  type: 'metal',
}

export const billonMaterial = {
  name: 'Billon',
  image: billon,
  price: 20,
  type: 'metal',
}

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

export const materials = [goldMaterial, silverMaterial, zincMaterial, ironMaterial, copperMaterial]

export const recipes = [bronzeRecipe, billonRecipe, chineseSilverRecipe, whiteGoldRecipe]

export const areEquals = (machine1, machine2) => machine1 && machine2 && machine1.id === machine2.id
