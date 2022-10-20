import React, { useCallback, useEffect, useState } from 'react'
import { JsonParam, useQueryParam } from 'use-query-params'
import { Layer } from './types'
import { Equipment, Equipments } from './utils/equipments'
import {
  createEmptyLayer,
  createRandomLayer,
  getDefaultLayers,
  getFilepathForLayer,
  getRandomizedLayers,
  getRandomizedLayersWithEquipment,
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
  randomizeEquipmentIds: () => void
  addLayer: () => void
  resetLayers: () => void
  deleteLayer: (depth: number) => void
  moveLayer: (from: number, to: number) => void
}

const defaultState: ITubavContext = {
  downloadAvatar: noop,
  setAvatarDataURL: noop,
  layers: [],
  selectedLayer: 0,
  setSelectedLayer: noop,
  setLayerDetails: noop,
  randomizeLayers: noop,
  randomizeEquipmentIds: noop,
  addLayer: noop,
  resetLayers: noop,
  deleteLayer: noop,
  moveLayer: noop,
}

/**
 * Context of the TUBav app.
 */
export const TubavContext = React.createContext<ITubavContext>(defaultState)

type TubavContextProviderProps = { children?: React.ReactNode }

/**
 * Provides the context of the TUBav app.
 */
export const TubavContextProvider: React.FC<TubavContextProviderProps> = ({
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
  const [layers, setLayers] = useLayers()

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
    [setLayers, layers]
  )

  const addLayer = useCallback(() => {
    const newLayer = createRandomLayer(layers.length - 1)
    const emptyLayer = createEmptyLayer(layers.length)
    const layersWithoutEmpty = layers.slice(0, -1)
    setLayers([...layersWithoutEmpty, newLayer, emptyLayer])
  }, [layers, setLayers])

  const deleteLayer = useCallback(
    (depth: number) => {
      // remove the layer corresponding to the depth
      const newLayers = layers.filter((layer) => layer.depth !== depth)
      // update depth of layers that were after removed layer
      const updatedLayers = newLayers.map((layer) => {
        if (layer.depth > depth) {
          return { ...layer, depth: layer.depth - 1 }
        }
        return layer
      })
      setLayers([...updatedLayers])

      // set new selected if empty layer is the new selected
      const count = updatedLayers.length
      const emptyLayer = updatedLayers[count - 1]
      if (selectedLayer === emptyLayer.depth) {
        setSelectedLayer(emptyLayer.depth - 1)
      }
    },
    [layers, setLayers, selectedLayer, setSelectedLayer]
  )

  const resetLayers = useCallback(() => {
    const defaultLayers = getDefaultLayers()
    setLayers([...defaultLayers])
  }, [setLayers])

  // keep same number of layers for randomization
  // randomize categories of layers
  const randomizeLayers = useCallback(() => {
    // by default, there is a body, a weapon and an empty layers
    const newLayers = getRandomizedLayers(layers.length - 3)
    setLayers([...newLayers])
  }, [layers, setLayers])

  // randomize equipment ids of layers (same categories)
  const randomizeEquipmentIds = useCallback(() => {
    const newLayers = getRandomizedLayersWithEquipment(layers)
    setLayers([...newLayers])
  }, [layers, setLayers])

  const moveLayer = useCallback(
    (from: number, to: number) => {
      // layer is moved from top to bottom
      const layerMovesDown = from > to
      const layer = layers.find((layer) => layer.depth === from) as Layer
      const newLayers: Layer[] = []

      for (let depth = 0; depth < layers.length; depth++) {
        const currLayer = layers[depth]

        // remove layer from old position
        if (depth === from) {
          continue
        }

        // if layer moves down, move others up
        if (layerMovesDown && depth >= to && depth < from) {
          // set layer to its new position
          if (depth === to) {
            newLayers.push({ ...layer, depth: to })
          }
          // move current layer up
          newLayers.push({ ...currLayer, depth: currLayer.depth + 1 })
          continue
        }

        // if layer moves up, move others down
        if (!layerMovesDown && depth <= to && depth > from) {
          // move current layer down
          newLayers.push({ ...currLayer, depth: currLayer.depth - 1 })
          // set layer to its new position
          if (depth === to) {
            newLayers.push({ ...layer, depth: to })
          }
          continue
        }

        // current layer keeps its position
        newLayers.push(currLayer)
      }

      setLayers([...newLayers])
      // new layer selected is the one that was moved
      setSelectedLayer(to)
    },
    [layers, setLayers, setSelectedLayer]
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
        randomizeLayers,
        randomizeEquipmentIds,
        addLayer,
        resetLayers,
        deleteLayer,
        moveLayer,
      }}
    >
      {children}
    </TubavContext.Provider>
  )
}

/**
 * Hook that get layers from query params if they exists,
 * otherwise create random layers.
 * Return the layers and a function to update them.
 */
const useLayers = (): [
  Layer[],
  React.Dispatch<React.SetStateAction<Layer[]>>
] => {
  const [queryParams, setQueryParams] = useQueryParam<
    Layer[],
    Layer[] | undefined
  >('layers', JsonParam)
  const [layers, setLayers] = useState<Layer[]>(
    queryParams ? queryParams : getDefaultLayers()
  )

  useEffect(() => {
    setQueryParams(layers)
  }, [layers])

  return [layers, setLayers]
}
