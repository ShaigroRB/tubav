import { EQUIPMENT_NAMES, EQUIPMENT_IDS } from './constants'
import { Equipment } from './types'

type Lang = 'fr' | 'en'

export const getEquipmentName = (id: number, lang: Lang = 'fr'): string => {
  const name = EQUIPMENT_NAMES[id]
  return name ? name[lang] : id.toString()
}

export const sortEquipmentsByName = (
  equipmentA: string,
  equipmentB: string
): number => {
  if (equipmentA < equipmentB) {
    return -1
  }
  if (equipmentA > equipmentB) {
    return 1
  }
  return 0
}

export type ComputedEquipment = { value: string; label: string }

const sortEquipmentNames = (category: Equipment, lang: 'fr' | 'en') => {
  return EQUIPMENT_IDS[category]
    .map((id: number) => ({
      value: id.toString(),
      label: EQUIPMENT_NAMES[id][lang],
    }))
    .sort(({ label: labelA }, { label: labelB }) => {
      if (labelA < labelB) {
        return -1
      }
      if (labelA > labelB) {
        return 1
      }
      return 0
    })
}

export const getSortedEquipmentNamesFR = (): Record<
  Equipment,
  ComputedEquipment[]
> => ({
  accessory: sortEquipmentNames('accessory', 'fr'),
  hat: sortEquipmentNames('hat', 'fr'),
  shield: sortEquipmentNames('shield', 'fr'),
  weapon: sortEquipmentNames('weapon', 'fr'),
  grey: sortEquipmentNames('grey', 'fr'),
})

export const getSortedEquipmentNamesEN = (): Record<
  Equipment,
  ComputedEquipment[]
> => ({
  accessory: sortEquipmentNames('accessory', 'en'),
  hat: sortEquipmentNames('hat', 'en'),
  shield: sortEquipmentNames('shield', 'en'),
  weapon: sortEquipmentNames('weapon', 'en'),
  grey: sortEquipmentNames('grey', 'en'),
})

export const emptyEquipments: Record<Equipment, ComputedEquipment[]> = {
  hat: [{ value: '', label: '' }],
  accessory: [{ value: '', label: '' }],
  shield: [{ value: '', label: '' }],
  weapon: [{ value: '', label: '' }],
  grey: [{ value: '', label: '' }],
}
