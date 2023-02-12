import { Stack, Button } from '@mantine/core'
import { useContext } from 'react'
import { Plus, ArrowsShuffle, Refresh } from 'tabler-icons-react'
import { TubavContext } from '../../TubavContext'
import { PaperProps, Paper } from '../Paper'

/**
 * Displays all actions that can be performed for layers:
 * - Add layer: add a layer in last with a random category & equipment
 * - Random categories: randomize categories for each layer
 * - Random equipments: randomize equipments for each layer
 * - Reset layers: reset to 4 layers
 *   1. body
 *   2. random accessory
 *   3. random hat
 *   4. random weapon
 */
export const LayerActions: React.FC<PaperProps> = ({ ...props }) => {
  const { randomizeLayers, randomizeEquipmentIds, resetLayers, addLayer } =
    useContext(TubavContext)

  return (
    <Paper {...props}>
      <Stack>
        <Button variant="outline" rightIcon={<Plus />} onClick={addLayer}>
          Add layer
        </Button>
        <Button
          variant="outline"
          rightIcon={<ArrowsShuffle />}
          onClick={randomizeLayers}
        >
          Random categories
        </Button>
        <Button
          variant="outline"
          rightIcon={<ArrowsShuffle />}
          onClick={randomizeEquipmentIds}
        >
          Random equipments
        </Button>
        <Button variant="outline" rightIcon={<Refresh />} onClick={resetLayers}>
          Reset layers
        </Button>
      </Stack>
    </Paper>
  )
}
