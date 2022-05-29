import React, { FC, useCallback, useMemo, useState } from 'react'
import { Layer } from './types'
import {
  Equipment,
  Equipments,
  EQUIPMENT_IDS,
  NonEquipment,
} from './utils/equipments'
import {
  createEmptyLayer,
  createRandomLayer,
  getFilepathForLayer,
  getRandomizedLayers,
} from './utils/layer'
import { noop } from './utils/noop'

interface ITubavContext {
  downloadAvatar: () => void
  setAvatarDataURL: (dataURL: string) => void
  layers: Layer[]
  selectedLayer: number
  setSelectedLayer: (depth: number) => void
  setLayerDetails: (layer: Layer) => void
  randomizeLayers: () => void
  addLayer: () => void
}

const defaultState: ITubavContext = {
  downloadAvatar: noop,
  setAvatarDataURL: noop,
  layers: [],
  selectedLayer: 0,
  setSelectedLayer: noop,
  setLayerDetails: noop,
  randomizeLayers: noop,
  addLayer: noop,
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
  const [layers, setLayers] = useState<Layer[]>(getRandomizedLayers(1))

  // update a specific layer
  const setLayerDetails = useCallback(
    (layer: Layer) => {
      const newLayers = layers.map((savedLayer: Layer) => {
        if (savedLayer.depth !== layer.depth) {
          return savedLayer
        }

        // update layer name in case its the default one
        let name = layer.name
        if (Equipments.includes(name as Equipment)) {
          name = layer.category
        }
        return {
          ...layer,
          filepath: getFilepathForLayer(layer),
          name,
        }
      })
      setLayers(newLayers)
    },
    [setLayers, layers],
  )

  const addLayer = () => {
    const newLayer = createRandomLayer(layers.length - 1)
    const emptyLayer = createEmptyLayer(layers.length)
    const layersWithoutEmpty = layers.slice(0, -1)
    setLayers([...layersWithoutEmpty, newLayer, emptyLayer])
  }

  const randomizeLayers = () => {
    // by default, there is a body, a weapon and an empty layers
    const newLayers = getRandomizedLayers(layers.length - 3)
    setLayers([...newLayers])
  }

  return (
    <TubavContext.Provider
      value={{
        downloadAvatar,
        setAvatarDataURL,
        layers,
        selectedLayer,
        setSelectedLayer,
        setLayerDetails,
        randomizeLayers,
        addLayer,
      }}
    >
      {children}
    </TubavContext.Provider>
  )
}
