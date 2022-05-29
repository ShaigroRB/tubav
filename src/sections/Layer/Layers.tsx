import { ActionIcon, Group, Paper, Stack, Text } from '@mantine/core'
import React, { useContext } from 'react'
import { Eye, EyeOff, Trash } from 'tabler-icons-react'
import { TubavContext } from '../../TubavContext'
import { Layer } from '../../types'
import { getThemeColors } from '../../utils/colors'

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
    shadow="xs"
    p="xs"
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
  const { layers, selectedLayer, setSelectedLayer } = useContext(TubavContext)

  return (
    <Stack style={{ overflow: 'scroll' }}>
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
  )
}
