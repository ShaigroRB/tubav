import {
  ActionIcon,
  Box,
  Center,
  Group,
  Paper,
  Stack,
  Text,
} from '@mantine/core'
import React, { useContext } from 'react'
import { Eye, EyeOff, Trash } from 'tabler-icons-react'
import { TubavContext } from '../../TubavContext'
import { Layer } from '../../types'
import { getThemeColors } from '../../utils/colors'

type LayerItemProps = Layer & {
  isSelected: boolean
}

/**
 * Item component for a layer.
 */
const LayerItem: React.FC<LayerItemProps> = ({ name, visible, isSelected }) => (
  <Paper
    shadow="xs"
    p="xs"
    withBorder={isSelected}
    sx={(theme) => ({
      borderColor: getThemeColors(theme, 'dark', 1),
      backgroundColor: isSelected
        ? getThemeColors(theme, 'gray', 1)
        : 'initial',
      borderWidth: isSelected ? 2 : 0,
      borderStyle: isSelected ? 'solid' : 'none',
      ':hover': {
        backgroundColor: getThemeColors(theme, 'gray', 1),
      },
      maxHeight: '3rem',
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
  const { layers, selectedLayer } = useContext(TubavContext)

  return (
    <Box style={{ border: '1px solid green', flex: 1, overflow: 'scroll' }}>
      <Stack>
        {layers.map((layer) => {
          if (layer.category === 'empty') {
            return null
          }

          return (
            <LayerItem
              {...layer}
              isSelected={layer.depth === selectedLayer}
              key={layer.depth}
            />
          )
        })}
      </Stack>
    </Box>
  )
}
