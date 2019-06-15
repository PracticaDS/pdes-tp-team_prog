import StarterMachineNode from '../components/Machine/Node/StarterMachineNode'
import TransporterMachineNode from '../components/Machine/Node/TransporterMachineNode'
import SellerMachineNode from '../components/Machine/Node/SellerMachineNode'
import CrafterMachineNode from '../components/Machine/Node/CrafterMachineNode'
import FurnaceMachineNode from '../components/Machine/Node/FurnaceMachineNode'
import EmptyMachineNode from '../components/Machine/Node/EmptyMachineNode'

export const Starter = 'Starter'
export const Transporter = 'Transporter'
export const Seller = 'Seller'
export const Crafter = 'Crafter'
export const Furnace = 'Furnace'
export const Empty = 'Empty'

export const machineByType = {
  [Starter]: StarterMachineNode,
  [Transporter]: TransporterMachineNode,
  [Seller]: SellerMachineNode,
  [Crafter]: CrafterMachineNode,
  [Furnace]: FurnaceMachineNode,
  [Empty]: EmptyMachineNode,
}

export const createEmptyMachine = () => ({
  name: Empty,
  type: Empty,
})

const starterMachineMetadata = ({
  selectedMaterial = { name: 'agua', price: 10 },
  availableMaterials = [{ name: 'agua', price: 10 }],
}) => ({
  selectedMaterial,
  availableMaterials,
})
export const createStarterMachine = ({ price = 800, frequency = 1, direction = 'DOWN' }) => ({
  name: 'Starter',
  type: Starter,
  price,
  frequency,
  direction,
  metadata: starterMachineMetadata({}),
})
