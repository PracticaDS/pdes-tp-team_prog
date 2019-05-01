import crafter from '../../assets/crafter.png'
import furnace from '../../assets/furnace.png'
import seller from '../../assets/seller.png'
import starter from '../../assets/starter.png'
import transporter from '../../assets/transporter.png'

import deleteOption from '../../assets/delete.png'
import rotateOption from '../../assets/rotate.png'
import moveOption from '../../assets/move.png'

<<<<<<< HEAD
import { Starter, Seller, Crafter, Furnace, Transporter } from '../../utils/machineUtils'
=======
import { DOWN } from '../../utils/directions'
>>>>>>> Fix - merge conflicts

export const machines = [
  {
    image: starter,
    name: 'Starter',
    type: Starter,
    buy: 800,
    sell: 400,
    frequency: 1,
    direction: DOWN,
    metadata: {
      selectedMaterial: { name: 'agua', price: 10 },
      availableMaterials: [{ name: 'agua', price: 10 }],
    },
    process(materials, func) {
      func(this.direction, [], [{ ...this.metadata.selectedMaterial, frequency: this.frequency }])
    },
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
    image: transporter,
    name: 'Transporter',
    type: Transporter,
    buy: 800,
    sell: 400,
    frequency: 1,
<<<<<<< HEAD
    direction: 'DOWN',
    process(materials, func) {
=======
    direction: DOWN,
    process: function(materials, func) {
>>>>>>> Fix - merge conflicts
      func(this.direction, materials, materials)
    },
  },
]

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
