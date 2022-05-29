import React, { FC, useCallback, useMemo, useState } from 'react'
import { Layer } from './types'
import { Equipments, EQUIPMENT_IDS } from './utils/equipments'
import { noop } from './utils/noop'

interface ITubavContext {
  downloadAvatar: () => void
  setAvatarDataURL: (dataURL: string) => void
  layers: Layer[]
}

const defaultState: ITubavContext = {
  downloadAvatar: noop,
  setAvatarDataURL: noop,
  layers: [],
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

  // const [layers, setLayers] = useState<Layer[]>([])
  const layers = useMemo(() => getLayers(5), [])

  return (
    <TubavContext.Provider value={{ downloadAvatar, setAvatarDataURL, layers }}>
      {children}
    </TubavContext.Provider>
  )
}

// TODO: clean afterwards
const random = (length: number): number => Math.floor(Math.random() * length)
const getRandomEquipment = (isWeapon: boolean) => {
  const category = isWeapon
    ? 'weapon'
    : Equipments[random(Equipments.length - 2)]

  const equipments = EQUIPMENT_IDS[category]
  const equipment_id = equipments[random(equipments.length - 1)]
  return `${category}_${equipment_id}`
}
const getSvg = (name: string) => `/assets/${name}.svg`

const getLayers = (nbLayers: number): Layer[] => {
  let layers: Layer[] = [{ filepath: getSvg('body'), name: 'body' }]

  for (let i = 0; i < nbLayers; i++) {
    const equipment = getRandomEquipment(false)
    layers.push({ filepath: getSvg(equipment), name: equipment })
  }

  const weapon = getRandomEquipment(true)
  layers.push({ filepath: getSvg(weapon), name: weapon })
  layers.push({ filepath: getSvg('empty'), name: 'empty' })

  return layers
}
