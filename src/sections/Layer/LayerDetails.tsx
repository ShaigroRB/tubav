import {
  Button,
  Group,
  Select,
  SelectItem,
  Stack,
  Switch,
  Text,
  TextInput,
  Title,
} from '@mantine/core'
import React, { useContext, useEffect, useMemo, useState } from 'react'
import { Trash } from 'tabler-icons-react'
import { TubavContext } from '../../TubavContext'
import { getThemeColors } from '../../utils/colors'
import { Equipment, Equipments, EQUIPMENT_IDS } from '../../utils/equipments'
import { Paper } from '../Paper'

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

const getDataDepths = (count: number): SelectItem[] => {
  const depths = []
  for (let i = 0; i < count; i++) {
    depths.push({
      value: i.toString(),
      label: i.toString(),
    })
  }
  return depths
}

/**
 * Details of the selected layer.
 */
export const LayerDetails: React.FC = () => {
  const {
    layers,
    selectedLayer,
    setLayerDetails,
    deleteLayer,
    moveLayer,
    swapLayers,
  } = useContext(TubavContext)
  const layer = useMemo(() => layers[selectedLayer], [selectedLayer, layers])

  // define local layer name to update name only on blur (unfocus)
  const [layerName, setLayerName] = useState<string>(layer.name)

  // update local layer name if selected layer updates
  useEffect(() => {
    setLayerName(layer.name)
  }, [layer])

  const selectDataCategories = useMemo(() => getDataCategories(), [])
  const selectDataEquipmentIds = useMemo(() => {
    if (layer.category === 'body' || layer.category === 'empty') {
      return []
    }
    return getDataEquipmentIds(layer.category as Equipment)
  }, [layer])
  const selectDataDepths = useMemo(() => getDataDepths(layers.length - 1), [
    layers,
  ])

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

  const handleUpdateName = () => {
    // only update if name was edited
    if (layer.name !== layerName) {
      const newName = layerName ? layerName : layer.category
      setLayerDetails({ ...layer, name: newName })
    }
  }

  const handleUpdateMoveDepth = (value: string) => {
    const depth = parseInt(value)
    moveLayer(layer.depth, depth)
  }

  const handleUpdateSwapDepths = (value: string) => {
    const depth = parseInt(value)
    swapLayers(layer.depth, depth)
  }

  // if layer is body, do not display equipment ids
  // no select for category either
  return (
    <Paper>
      <Stack align="flex-start" justify="flex-start" className="pristine">
        <TextInput
          placeholder="Name of the layer"
          variant="unstyled"
          required
          value={layerName}
          onChange={(event) => setLayerName(event.currentTarget.value)}
          onBlur={(_) => handleUpdateName()}
          sx={(theme) => ({
            borderColor: getThemeColors(theme, 'teal', 3),
            borderLeftWidth: 4,
            borderLeftStyle: 'solid',
            input: { fontSize: 26, fontWeight: 700 },
            paddingLeft: '1rem',
          })}
        />

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

        <Stack>
          <Title order={4}>Depth:</Title>
          <Group>
            <Group>
              <Text>Move to depth:</Text>
              <Select
                data={selectDataDepths}
                value={layer.depth.toString()}
                onChange={handleUpdateMoveDepth}
              />
            </Group>
            <Group>
              <Text>Swap with depth:</Text>
              <Select
                data={selectDataDepths}
                value={layer.depth.toString()}
                onChange={handleUpdateSwapDepths}
              />
            </Group>
          </Group>
        </Stack>

        <Group>
          <Text>Visible:</Text>
          <Switch checked={layer.visible} />
        </Group>

        {!isBody && (
          <Button
            color="red"
            variant="light"
            rightIcon={<Trash />}
            onClick={() => deleteLayer(layer.depth)}
          >
            Delete layer
          </Button>
        )}
      </Stack>
    </Paper>
  )
}
