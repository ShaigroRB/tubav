import React, { useEffect, useRef } from 'react'
import { Layer } from '../../types'

/**
 * Recursively draw layers on a canvas.
 * It's done this way to ensure layers are drawn in the correct order.
 * Returns the data url of the final image.
 */
const drawLayers = (
  canvas: HTMLCanvasElement,
  layers: Layer[],
  setAvatarDataURL: (dataURL: string) => void,
  index: number
) => {
  const layer = layers[index]
  const context = canvas.getContext('2d')

  const tmpImg = new Image()
  // draw the next layer only after the current layer has loaded
  tmpImg.onload = () => {
    if (layer.visible) {
      context?.drawImage(tmpImg, 0, 0)
    }

    // if layer is empty, it's the last layer
    // set avatar data url
    if (layer.name === 'empty') {
      setAvatarDataURL(canvas.toDataURL('image/png'))
    } else {
      drawLayers(canvas, layers, setAvatarDataURL, index + 1)
    }
  }
  tmpImg.src = layer.filepath
}

// fixed sizes of the svgs
const HEIGHT_SVG = 532
const WIDTH_SVG = 462

/**
 * Hook that renders layers on a canvas.
 * It returns a ref for that canvas.
 */
const useCanvas = (
  layers: Layer[],
  setAvatarDataURL: (dataUrl: string) => void
) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas!.getContext('2d')
    context?.clearRect(0, 0, WIDTH_SVG, HEIGHT_SVG)

    if (canvas) {
      drawLayers(canvas, layers, setAvatarDataURL, 0)
    }
  }, [layers])

  return canvasRef
}

const zoomOut = (canvas: HTMLCanvasElement, zoomScale: number) => {
  const context = canvas.getContext('2d')
  context?.scale(zoomScale, zoomScale)
}

type CanvasProps = {
  id: string
  'aria-label': string
  layers: Layer[]
  setAvatarDataURL: (dataUrl: string) => void
  zoomScale?: number
}

/**
 * Canvas used to render the avatar. Its height and width are fixed.
 */
export const RenderingLayersCanvas: React.FC<CanvasProps> = ({
  layers,
  setAvatarDataURL,
  zoomScale = 1,
  ...props
}) => {
  const canvasRef = useCanvas(layers, setAvatarDataURL)

  // Zooming out can't properly be done via css
  // so, I'm doing it via the context of canvas
  const hasZoomedOut = useRef(false)
  useEffect(() => {
    if (!hasZoomedOut.current && canvasRef.current) {
      zoomOut(canvasRef.current, zoomScale)
      hasZoomedOut.current = true
    }
  }, [canvasRef, hasZoomedOut, zoomScale])

  return (
    <canvas
      height={HEIGHT_SVG * zoomScale}
      width={WIDTH_SVG * zoomScale}
      ref={canvasRef}
      {...props}
    />
  )
}
