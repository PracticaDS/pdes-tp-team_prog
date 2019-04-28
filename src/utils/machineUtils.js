import StarterMachineNode from '../components/MachineNodes/StarterMachineNode/StarterMachineNode'
import TransporterMachineNode from '../components/MachineNodes/TransporterMachineNode/TransporterMachineNode'
import SellerMachineNode from '../components/MachineNodes/SellerMachineNode/SellerMachineNode'
import CrafterMachineNode from '../components/MachineNodes/CrafterMachineNode/CrafterMachineNode'
import FurnaceMachineNode from '../components/MachineNodes/FurnaceMachineNode/FurnaceMachineNode'
import EmptyMachineNode from '../components/MachineNodes/EmptyMachineNode/EmptyMachineNode'

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
