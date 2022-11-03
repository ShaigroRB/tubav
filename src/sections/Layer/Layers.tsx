import { ActionIcon, Box, Group, Stack, StackProps, Text } from '@mantine/core'
import React, { useContext } from 'react'
import { Eye, EyeOff, Trash } from 'tabler-icons-react'
import { TubavContext } from '../../TubavContext'
import { Layer } from '../../types'
import { getThemeColors } from '../../utils/colors'
import { getEquipmentName } from '../../utils/equipments/utils'
import { Paper } from '../Paper'
import { LayerActions } from './LayerActions'

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
export const Layers: React.FC<StackProps> = ({ sx, ...props }) => {
  const {
    layers,
    selectedLayer,
    setSelectedLayer,
    deleteLayer,
    setLayerDetails,
  } = useContext(TubavContext)

  return (
    <Stack
      py="sm"
      sx={{
        overflow: 'scroll',
        flexDirection: 'column-reverse',
        ...sx,
      }}
      {...props}
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
  )
}
