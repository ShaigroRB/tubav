import {
  Button,
  Group,
  Paper,
  Select,
  SelectItem,
  Stack,
  Switch,
  Text,
  Title,
} from '@mantine/core'
import React, { useContext, useMemo } from 'react'
import { Trash } from 'tabler-icons-react'
import { TubavContext } from '../../TubavContext'
import { getThemeColors } from '../../utils/colors'
import { Equipment, Equipments, EQUIPMENT_IDS } from '../../utils/equipments'

const getDataCategories = (): SelectItem[] =>
  Equipments.map((equipment) => ({
    value: equipment.toString(),
    label: equipment.toString(),
  }))

const getDataEquipmentIds = (category: Equipment): SelectItem[] =>
  EQUIPMENT_IDS[category].map((id) => ({
    value: id.toString(),
    label: id.toString(),
  }))

/**
 * Details of the selected layer.
 */
export const LayerDetails: React.FC = () => {
  const { layers, selectedLayer, setLayerDetails } = useContext(TubavContext)
  const layer = useMemo(() => layers[selectedLayer], [selectedLayer, layers])

  const selectDataCategories = useMemo(() => getDataCategories(), [])
  const selectDataEquipmentIds = useMemo(() => {
    if (layer.category === 'body') {
      return []
    }
    return getDataEquipmentIds(layer.category as Equipment)
  }, [layer])

  const isBody = layer.category === 'body'

  const handleUpdateCategory = (value: string) => {
    const category = value as Equipment
    // get first equipment id for new category
    const equipment_id = EQUIPMENT_IDS[category][0]
    setLayerDetails({ ...layer, category, equipment_id })
  }

  const handleUpdateEquipmentId = (value: string) => {
    const equipment_id = parseInt(value)
    setLayerDetails({ ...layer, equipment_id })
  }

  // if layer is body, do not display equipment ids
  // no select for category either
  return (
    <Paper
      shadow="xs"
      p="xs"
      sx={(theme) => ({
        backgroundColor: getThemeColors(theme, 'gray', 1),
      })}
    >
      <Stack align="flex-start" justify="flex-start" className="pristine">
        <Title order={2}>{layer.name}</Title>

        {isBody ? (
          <Text>Category: {layer.category}</Text>
        ) : (
          <Group>
            <Text>Category:</Text>
            <Select
              data={selectDataCategories}
              value={layer.category}
              onChange={handleUpdateCategory}
            />
          </Group>
        )}

        {!isBody && (
          <Group>
            <Text>Equipment id:</Text>
            <Select
              data={selectDataEquipmentIds}
              value={layer.equipment_id.toString()}
              onChange={handleUpdateEquipmentId}
            />
          </Group>
        )}

        <Group>
          <Text>
            Depth:{' '}
            <input
              type="number"
              defaultValue={layer.depth}
              min={0}
              max={layers.length}
            />
          </Text>
        </Group>
        <Group>
          <Text>Visible:</Text>
          <Switch checked={layer.visible} />
        </Group>

        {!isBody && (
          <Button color="red" variant="light" rightIcon={<Trash />}>
            Delete layer
          </Button>
        )}
      </Stack>
    </Paper>
  )
}
