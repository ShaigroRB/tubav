import { ActionIcon, Box, Button, Group, Stack, Text } from '@mantine/core'
import React, { useContext } from 'react'
import {
  ArrowsShuffle,
  Eye,
  EyeOff,
  Plus,
  Refresh,
  Trash,
} from 'tabler-icons-react'
import { TubavContext } from '../../TubavContext'
import { Layer } from '../../types'
import { getThemeColors } from '../../utils/colors'
import { getEquipmentName } from '../../utils/equipments'
import { Paper } from '../Paper'

type LayerItemProps = Layer & {
  isSelected: boolean
  selectLayer: () => void
  deleteLayer: () => void
  toggleVisibility: () => void
}

/**
 * Item component for a layer.
 */
const LayerItem: React.FC<LayerItemProps> = ({
  depth,
  name,
  equipment_id,
  category,
  visible,
  isSelected,
  selectLayer,
  deleteLayer,
  toggleVisibility,
}) => (
  <Paper
    onClick={selectLayer}
    sx={(theme) => ({
      borderColor: getThemeColors(theme, 'teal', 3),
      backgroundColor: isSelected
        ? getThemeColors(theme, 'gray', 2)
        : getThemeColors(theme, 'gray', 1),
      borderLeftWidth: isSelected ? 4 : 0,
      borderLeftStyle: isSelected ? 'solid' : 'none',
      ':hover': {
        backgroundColor: getThemeColors(theme, 'gray', 2),
      },
      maxHeight: '3rem',
      cursor: 'pointer',
    })}
  >
    <Group>
      <Text sx={{ flex: 3 }}>{name}</Text>
      {category !== 'body' && <Text>{getEquipmentName(equipment_id)}</Text>}
      <Text>{depth}</Text>
      <ActionIcon onClick={toggleVisibility}>
        {visible ? <Eye /> : <EyeOff />}
      </ActionIcon>
      {category !== 'body' ? (
        <ActionIcon
          onClick={(event: any) => {
            deleteLayer()
            // no need to select the item
            event.stopPropagation()
          }}
        >
          <Trash />
        </ActionIcon>
      ) : (
        <Box style={{ width: 28 }} />
      )}
    </Group>
  </Paper>
)

/**
 * List of layers.
 */
export const Layers: React.FC = () => {
  const {
    layers,
    selectedLayer,
    setSelectedLayer,
    randomizeLayers,
    randomizeEquipmentIds,
    addLayer,
    resetLayers,
    deleteLayer,
    setLayerDetails,
  } = useContext(TubavContext)

  // need max & min height to force overflow and set a height
  return (
    <Group>
      <Stack
        py="sm"
        style={{
          maxHeight: '26rem',
          overflow: 'scroll',
          flexDirection: 'column-reverse',
          flex: 2,
        }}
      >
        {layers.map((layer) => {
          if (layer.category === 'empty') {
            return null
          }

          const isSelected = layer.depth === selectedLayer

          return (
            <LayerItem
              {...layer}
              isSelected={isSelected}
              selectLayer={() => setSelectedLayer(layer.depth)}
              key={layer.depth}
              deleteLayer={() => deleteLayer(layer.depth)}
              toggleVisibility={() =>
                setLayerDetails({ ...layer, visible: !layer.visible })
              }
            />
          )
        })}
      </Stack>
      <Paper style={{ height: '26rem' }}>
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
          <Button
            variant="outline"
            rightIcon={<Refresh />}
            onClick={resetLayers}
          >
            Reset layers
          </Button>
        </Stack>
      </Paper>
    </Group>
  )
}
