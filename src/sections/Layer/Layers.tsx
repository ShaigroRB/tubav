import { ActionIcon, Button, Group, Stack, Text } from '@mantine/core'
import React, { useContext } from 'react'
import { ArrowsShuffle, Eye, EyeOff, Plus, Trash } from 'tabler-icons-react'
import { TubavContext } from '../../TubavContext'
import { Layer } from '../../types'
import { getThemeColors } from '../../utils/colors'
import { Paper } from '../Paper'

type LayerItemProps = Layer & {
  isSelected: boolean
  onClick: () => void
}

/**
 * Item component for a layer.
 */
const LayerItem: React.FC<LayerItemProps> = ({
  name,
  visible,
  isSelected,
  onClick,
}) => (
  <Paper
    onClick={onClick}
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
      <ActionIcon>{visible ? <Eye /> : <EyeOff />}</ActionIcon>
      <ActionIcon>
        <Trash />
      </ActionIcon>
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
    addLayer,
  } = useContext(TubavContext)

  return (
    <Group style={{ overflow: 'scroll' }}>
      <Stack
        py="sm"
        style={{ overflow: 'scroll', flexDirection: 'column-reverse', flex: 2 }}
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
              onClick={() => setSelectedLayer(layer.depth)}
              key={layer.depth}
            />
          )
        })}
      </Stack>
      <Paper style={{ flex: 1 }}>
        <Stack>
          <Button variant="outline" rightIcon={<Plus />} onClick={addLayer}>
            Add layer
          </Button>
          <Button
            variant="outline"
            rightIcon={<ArrowsShuffle />}
            onClick={randomizeLayers}
          >
            Randomize layers
          </Button>
        </Stack>
      </Paper>
    </Group>
  )
}
