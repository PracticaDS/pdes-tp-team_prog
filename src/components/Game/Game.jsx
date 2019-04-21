import React from 'react'
import ResourcesBar from '../Resources/ResourcesBar'
import crafter from '../../assets/crafter.png'
import furnace from '../../assets/furnace.png'
import seller from '../../assets/seller.png'
import starter from '../../assets/starter.png'
import transporter from '../../assets/transporter.png'
import MachineTypes from '../MachineTypes/MachineTypes'
import EmptyMachineNode from '../MachineNodes/EmptyMachineNode/EmptyMachineNode'
import FactoryGrid from '../FactoryGrid/FactoryGrid'
import './Game.css'

const machineTypes = [
  {
    image: starter,
    title: 'Starter',
  },
  {
    image: seller,
    title: 'Seller',
  },
  {
    image: crafter,
    title: 'Crafter',
  },
  {
    image: furnace,
    title: 'Furnace',
  },
  {
    image: transporter,
    title: 'Transporter',
  },
]

const rowBlock = [
  EmptyMachineNode,
  EmptyMachineNode,
  EmptyMachineNode,
  EmptyMachineNode,
  EmptyMachineNode,
]
const blocks = [rowBlock, rowBlock, rowBlock, rowBlock, rowBlock]

// TODO: we dont need pass every state components
const Game = () => (
  <div className="Game">
    {/* When we have redux, we wont pass the currency */}
    <ResourcesBar currency={0} />
    <div className="HorizontalGameParts">
      <MachineTypes elements={machineTypes.slice(0, 5)} />
      <FactoryGrid componenets={blocks} />
      <MachineTypes elements={[]} /> {/* TODO: we need change this component */}
    </div>
  </div>
)

export default Game
