import React, { FC, useCallback, useMemo, useState } from 'react'
import { Layer } from './types'
import {
  Equipment,
  Equipments,
  EQUIPMENT_IDS,
  NonEquipment,
} from './utils/equipments'
import { noop } from './utils/noop'

interface ITubavContext {
  downloadAvatar: () => void
  setAvatarDataURL: (dataURL: string) => void
  layers: Layer[]
  selectedLayer: number
}

const defaultState: ITubavContext = {
  downloadAvatar: noop,
  setAvatarDataURL: noop,
  layers: [],
  selectedLayer: 0,
}

/**
 * Context of the TUBav app.
 */
export const TubavContext = React.createContext<ITubavContext>(defaultState)

type TubavContextProviderProps = { children?: React.ReactNode }

/**
 * Provides the context of the TUBav app.
 */
export const TubavContextProvider: FC<TubavContextProviderProps> = ({
  children,
}) => {
  const [avatarDataURL, setAvatarDataURL] = useState<string>('')
  const downloadAvatar = useCallback(() => {
    const link = document.createElement('a')
    link.download = 'avatar.png'
    link.href = avatarDataURL
    link.click()
  }, [avatarDataURL])
  const [selectedLayer, setSelectedLayer] = useState<number>(1)

  // const [layers, setLayers] = useState<Layer[]>([])
  const layers = useMemo(() => getLayers(30), [])

  return (
    <TubavContext.Provider
      value={{ downloadAvatar, setAvatarDataURL, layers, selectedLayer }}
    >
      {children}
    </TubavContext.Provider>
  )
}

// TODO: clean afterwards
const random = (length: number): number => Math.floor(Math.random() * length)
const getRandomEquipment = (isWeapon: boolean) => {
  const category = isWeapon ? 'weapon' : Equipments[random(Equipments.length)]

  const equipments = EQUIPMENT_IDS[category]
  const equipment_id = equipments[random(equipments.length)]
  return { fullname: `${category}_${equipment_id}`, equipment_id, category }
}
const getSvg = (name: string) => `/assets/${name}.svg`

const createLayer = (
  filepath: string,
  category: Equipment | NonEquipment,
  equipment_id: number,
  depth: number,
): Layer => {
  return {
    name: category,
    filepath,
    category,
    equipment_id,
    depth,
    visible: equipment_id > 200 ? true : false,
  }
}

const getLayers = (nbLayers: number): Layer[] => {
  let depth = 0
  const bodyLayer: Layer = createLayer(getSvg('body'), 'body', -1, depth++)
  let layers: Layer[] = [bodyLayer]

  for (let i = 0; i < nbLayers; i++) {
    const { fullname, equipment_id, category } = getRandomEquipment(false)
    const layer = createLayer(getSvg(fullname), category, equipment_id, depth++)
    layers.push(layer)
  }

  const weapon = getRandomEquipment(true)
  const weaponLayer = createLayer(
    getSvg(weapon.fullname),
    weapon.category,
    weapon.equipment_id,
    depth++,
  )
  layers.push(weaponLayer)

  const emptyLayer = createLayer(getSvg('empty'), 'empty', -1, depth++)
  layers.push(emptyLayer)

  return layers
}
