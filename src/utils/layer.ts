import { Layer } from '../types'
import {
  Equipment,
  Equipments,
  EQUIPMENT_IDS,
  NonEquipment,
} from './equipments'

const getFilepath = (
  category: Equipment | NonEquipment,
  equipment_id: number
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
 * Get random equipment id for a category.
 */
const getRandomEquipmentId = (category: Equipment) => {
  const equipments = EQUIPMENT_IDS[category]
  const equipment_id = equipments[random(equipments.length)]
  return equipment_id
}

/**
 * Get random equipment.
 * isWeapon determines if equipment is always a weapon.
 */
const getRandomEquipment = (_category?: Equipment) => {
  const category = _category ? _category : Equipments[random(Equipments.length)]
  const equipment_id = getRandomEquipmentId(category)
  return { equipment_id, category }
}

/**
 * Create a layer.
 */
export const createLayer = (
  category: Equipment | NonEquipment,
  equipment_id: number,
  depth: number
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
 * Create a body layer.
 */
export const createBodyLayer = (depth: number): Layer =>
  createLayer('body', -1, depth)

/**
 * Default layers.
 */
export const getDefaultLayers = (): Layer[] => {
  let depth = 0
  const layers: Layer[] = [
    createLayer('body', -1, depth++),
    createLayer('accessory', getRandomEquipmentId('accessory'), depth++),
    createLayer('hat', getRandomEquipmentId('hat'), depth++),
    createLayer('weapon', getRandomEquipmentId('weapon'), depth++),
    createLayer('empty', -1, depth++),
  ]
  return layers
}

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

/**
 * Get layers with random equipment based on categories of given layers.
 */
export const getRandomizedLayersWithEquipment = (layers: Layer[]): Layer[] => {
  const randomizedLayers = layers.map((layer) => {
    if (layer.category === 'body' || layer.category === 'empty') {
      return layer
    }
    const equipment_id = getRandomEquipmentId(layer.category)
    const filepath = getFilepath(layer.category, equipment_id)
    return { ...layer, equipment_id, filepath }
  })
  return randomizedLayers
}
