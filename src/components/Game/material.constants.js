import gold from '../../assets/materials/gold.png'
import gold_melted from '../../assets/melted_materials/gold_melted.png'
import iron from '../../assets/materials/iron.png'
import silver from '../../assets/materials/silver.png'
import copper from '../../assets/materials/copper.png'
import bronze from '../../assets/materials/bronze.png'
import zinc from '../../assets/materials/zinc.png'
import whiteGold from '../../assets/materials/whiteGold.png'
import chineseSilver from '../../assets/materials/chineseSilver.png'
import billon from '../../assets/materials/billon.png'

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
  price: 50,
  type: 'metal',
}

export const silverMaterial = {
  name: 'Silver',
  image: silver,
  price: 40,
  type: 'metal',
}

export const ironMaterial = {
  name: 'Iron',
  image: iron,
  price: 30,
  type: 'metal',
}

export const zincMaterial = {
  name: 'Zinc',
  image: zinc,
  price: 20,
  type: 'metal',
}

export const copperMaterial = {
  name: 'Copper',
  image: copper,
  price: 10,
  type: 'metal',
}

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

export const materials = [goldMaterial, silverMaterial, zincMaterial, ironMaterial, copperMaterial]
