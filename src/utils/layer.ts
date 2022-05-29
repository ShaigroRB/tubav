import { Layer } from '../types'
import {
  Equipment,
  Equipments,
  EQUIPMENT_IDS,
  NonEquipment,
} from './equipments'

const getFilepath = (
  category: Equipment | NonEquipment,
  equipment_id: number,
) =>
  category === 'body' || category === 'empty'
    ? `/assets/${category}.svg`
    : `/assets/${category}_${equipment_id}.svg`

/**
 * Get the filepath for a layer based on its category and equipment id.
 */
export const getFilepathForLayer = (layer: Layer) =>
  getFilepath(layer.category, layer.equipment_id)

const random = (length: number): number => Math.floor(Math.random() * length)

/**
 * Get random equipment.
 * isWeapon determines if equipment is always a weapon.
 */
const getRandomEquipment = (_category?: Equipment) => {
  const category = _category ? _category : Equipments[random(Equipments.length)]
  const equipments = EQUIPMENT_IDS[category]
  const equipment_id = equipments[random(equipments.length)]
  return { equipment_id, category }
}

/**
 * Create a layer.
 */
export const createLayer = (
  category: Equipment | NonEquipment,
  equipment_id: number,
  depth: number,
): Layer => {
  const filepath = getFilepath(category, equipment_id)
  return {
    name: category,
    filepath,
    category,
    equipment_id,
    depth,
    visible: true,
  }
}

/**
 * Create a random layer.
 */
export const createRandomLayer = (depth: number): Layer => {
  const equipment = getRandomEquipment()
  return createLayer(equipment.category, equipment.equipment_id, depth)
}

/**
 * Create an empty layer.
 */
export const createEmptyLayer = (depth: number): Layer =>
  createLayer('empty', -1, depth)

/**
 * Get randomized layers.
 * It will always returns (nbLayers + 3) layers
 * because of body, weapon & empty layers.
 */
export const getRandomizedLayers = (nbLayers: number): Layer[] => {
  let depth = 0
  const bodyLayer: Layer = createLayer('body', -1, depth++)
  let layers: Layer[] = [bodyLayer]

  for (let i = 0; i < nbLayers; i++) {
    const { equipment_id, category } = getRandomEquipment()
    const layer = createLayer(category, equipment_id, depth++)
    layers.push(layer)
  }

  const weapon = getRandomEquipment('weapon')
  const weaponLayer = createLayer(weapon.category, weapon.equipment_id, depth++)
  layers.push(weaponLayer)

  const emptyLayer = createLayer('empty', -1, depth++)
  layers.push(emptyLayer)

  return layers
}
