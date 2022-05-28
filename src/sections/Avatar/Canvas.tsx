import React, { useEffect, useRef } from 'react'
import { Layer } from '../../types'
import { Equipments, EQUIPMENT_IDS } from '../../utils/equipments'

const random = (length: number): number => Math.floor(Math.random() * length)
const getRandomEquipment = (isWeapon: boolean) => {
  const category = isWeapon
    ? 'weapon'
    : Equipments[random(Equipments.length - 2)]

  const equipments = EQUIPMENT_IDS[category]
  const equipment_id = equipments[random(equipments.length - 1)]
  return `/assets/${category}_${equipment_id}.svg`
}

const getLayers = (nbLayers: number): Layer[] => {
  let layers: Layer[] = [{ filepath: '/assets/body.svg' }]
  for (let i = 0; i < nbLayers; i++) {
    const equipment = getRandomEquipment(false)
    layers.push({ filepath: equipment })
  }

  layers.push({ filepath: getRandomEquipment(true) })

  return layers
}

// fixed sizes of the svgs
const HEIGHT_SVG = 532
const WIDTH_SVG = 462

/**
 * Hook that renders layers on a canvas.
 * It returns a ref for that canvas.
 */
const useCanvas = (layers: Layer[]) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas!.getContext('2d')
    context?.clearRect(0, 0, WIDTH_SVG, HEIGHT_SVG)

    // draw layer one by one
    // first layer is on the bottom, last is on the top
    for (let layer of layers) {
      const tmpImg = new Image()
      tmpImg.onload = () => {
        context?.drawImage(tmpImg, 0, 0)
      }
      tmpImg.src = layer.filepath
    }
  }, [layers])

  return canvasRef
}

type CanvasProps = {
  id: string
}

/**
 * Canvas used to render the avatar. Its height and width are fixed.
 */
export const Canvas: React.FC<CanvasProps> = (props) => {
  // TODO: get the layers from future context
  const canvasRef = useCanvas(getLayers(1000))
  return (
    <canvas height={HEIGHT_SVG} width={WIDTH_SVG} ref={canvasRef} {...props} />
  )
}
