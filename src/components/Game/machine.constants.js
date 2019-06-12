import crafter from '../../assets/machines/crafter.png'
import furnace from '../../assets/machines/furnace.png'
import seller from '../../assets/machines/seller.png'
import starter from '../../assets/machines/starter.png'
import transporter from '../../assets/machines/transporter.png'

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
}

export const sellerMachine = {
  id: 2,
  image: seller,
  name: 'Seller',
  type: Seller,
  price: 1000,
  frequency: 1,
  direction: DOWN,
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
}
