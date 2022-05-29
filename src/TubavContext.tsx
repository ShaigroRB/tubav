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
  setSelectedLayer: (depth: number) => void
  setLayerDetails: (layer: Layer) => void
}

const defaultState: ITubavContext = {
  downloadAvatar: noop,
  setAvatarDataURL: noop,
  layers: [],
  selectedLayer: 0,
  setSelectedLayer: noop,
  setLayerDetails: noop,
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
  const [layers, setLayers] = useState<Layer[]>(getLayers(3))

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

  return (
    <TubavContext.Provider
      value={{
        downloadAvatar,
        setAvatarDataURL,
        layers,
        selectedLayer,
        setSelectedLayer,
        setLayerDetails,
      }}
    >
      {children}
    </TubavContext.Provider>
  )
}
