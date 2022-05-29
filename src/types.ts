import { Equipment, NonEquipment } from './utils/equipments'

export type Layer = {
  name: string
  filepath: string
  category: Equipment | NonEquipment
  equipment_id: number
  depth: number
  visible: boolean
}
