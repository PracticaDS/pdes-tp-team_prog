import crafter from '../../assets/crafter.png'
import furnace from '../../assets/furnace.png'
import seller from '../../assets/seller.png'
import starter from '../../assets/starter.png'
import transporter from '../../assets/transporter.png'

import deleteOption from '../../assets/delete.png'
import rotateOption from '../../assets/rotate.png'
import moveOption from '../../assets/move.png'

export const machines = [
  {
    image: starter,
    name: 'Starter',
    type: 'machine',
    cost: 800,
    frequency: 1,
  },
  {
    image: seller,
    name: 'Seller',
    type: 'machine',
    cost: 1000,
    frequency: 1,
  },
  {
    image: crafter,
    name: 'Crafter',
    type: 'machine',
    cost: 1200,
    frequency: 1,
  },
  {
    image: furnace,
    name: 'Furnace',
    type: 'machine',
    cost: 1500,
    frequency: 1,
  },
  {
    image: transporter,
    name: 'Transporter',
    type: 'machine',
    cost: 500,
    frequency: 1,
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
