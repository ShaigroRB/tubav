import { Stack, Button, Modal } from '@mantine/core'
import { useContext, useMemo } from 'react'
import { Plus, ArrowsShuffle, Refresh } from 'tabler-icons-react'
import { TubavContext } from '../../TubavContext'
import { PaperProps, Paper } from '../Paper'
import { useDisclosure } from '@mantine/hooks'
import { getEquipmentName } from '../../utils/equipments'

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
  const {
    randomizeLayers,
    randomizeEquipmentIds,
    resetLayers,
    addLayer,
    layers,
  } = useContext(TubavContext)

  const hasFrozen = useMemo(
    () => layers.findIndex((l) => l.frozen) !== -1,
    [layers]
  )

  const [opened, { open, close }] = useDisclosure(false)
  const confirmReset = () => {
    resetLayers()
    close()
  }

  return (
    <>
      <Paper {...props}>
        <Stack>
          <Button
            variant="outline"
            rightIcon={<Plus />}
            onClick={addLayer}
            title="Add a new layer on top of the others"
          >
            Add layer
          </Button>
          <Button
            variant="outline"
            rightIcon={<ArrowsShuffle />}
            onClick={randomizeLayers}
            title="Shuffle all categories for all layers"
          >
            Random categories
          </Button>
          <Button
            variant="outline"
            rightIcon={<ArrowsShuffle />}
            onClick={randomizeEquipmentIds}
            title="Shuffle all equipments for all layers"
          >
            Random equipments
          </Button>
          <Button
            variant="outline"
            rightIcon={<Refresh />}
            onClick={hasFrozen ? open : resetLayers}
            title="Reset the number of layers"
          >
            Reset layers
          </Button>
        </Stack>
      </Paper>

      <Modal
        opened={opened}
        onClose={close}
        title="Confirm reset of frozen layers"
        size="md"
      >
        Frozen layers are also reset.
        <br />
        List of frozen layers:
        <ul>
          {layers
            .filter((layer) => layer.frozen)
            .map((l) => (
              <li key={l.depth}>{getEquipmentName(l.equipment_id)}</li>
            ))}
        </ul>
        <Button onClick={confirmReset} size="lg">
          Reset all layers
        </Button>
      </Modal>
    </>
  )
}
