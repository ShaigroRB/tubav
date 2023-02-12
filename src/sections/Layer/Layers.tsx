import {
  ActionIcon,
  Box,
  Group,
  Stack,
  StackProps,
  Text,
  ThemeIcon,
} from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import React, { useContext } from 'react'
import {
  ArrowDown,
  ArrowUp,
  BrandRedhat,
  DotsCircleHorizontal,
  Edit,
  Eye,
  EyeOff,
  Shield,
  Snowman,
  Sunglasses,
  Sword,
  Trash,
} from 'tabler-icons-react'
import { TubavContext } from '../../TubavContext'
import { Layer, LayerCategory } from '../../types'
import { getThemeColors } from '../../utils/colors'
import { Equipment, NonEquipment } from '../../utils/equipments'
import { getEquipmentName } from '../../utils/equipments/utils'
import { Paper } from '../Paper'
import { LayerEditionModal } from './LayerEditionModal'

const TruncatedText: React.FC<{ text: string }> = ({ text }) => {
  return (
    <Text
      sx={{
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        width: '10rem',
      }}
    >
      {text}
    </Text>
  )
}

type LayerItemProps = Layer & {
  isSelected: boolean
  nbLayers: number
  selectLayer: () => void
  deleteLayer: () => void
  toggleVisibility: () => void
  moveLayerDown: () => void
  moveLayerUp: () => void
  editLayer: (category: LayerCategory, equipment: number) => void
}

/**
 * Item component for a layer.
 */
const LayerItem: React.FC<LayerItemProps> = ({
  depth,
  equipment_id,
  category,
  visible,
  isSelected,
  nbLayers,
  selectLayer,
  deleteLayer,
  toggleVisibility,
  moveLayerDown,
  moveLayerUp,
  editLayer,
}) => {
  const [opened, { open: openModal, close: closeModal }] = useDisclosure(false)

  return (
    <>
      <Paper
        onClickCapture={selectLayer}
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
          <ThemeIcon color="teal" variant="light">
            <CategoryIcon category={category} />
          </ThemeIcon>
          {category !== 'body' && (
            <TruncatedText text={getEquipmentName(equipment_id)} />
          )}
          <Group spacing="xs" sx={{ flexWrap: 'nowrap', marginLeft: 'auto' }}>
            <ActionIcon
              size={22}
              disabled={depth + 1 === nbLayers - 1}
              onClick={moveLayerUp}
            >
              <ArrowUp />
            </ActionIcon>
            <ActionIcon
              size={22}
              disabled={depth === 0}
              onClick={moveLayerDown}
            >
              <ArrowDown />
            </ActionIcon>
            <ActionIcon
              disabled={category === 'body'}
              size={22}
              onClick={openModal}
            >
              <Edit />
            </ActionIcon>
            <ActionIcon size={22} onClick={toggleVisibility}>
              {visible ? <Eye /> : <EyeOff />}
            </ActionIcon>
            <ActionIcon
              disabled={category === 'body'}
              size={22}
              onClick={(event: any) => {
                deleteLayer()
                // no need to select the item
                event.stopPropagation()
              }}
            >
              <Trash />
            </ActionIcon>
          </Group>
        </Group>
      </Paper>

      <LayerEditionModal
        opened={opened}
        close={closeModal}
        equipment={equipment_id}
        category={category}
        editLayer={editLayer}
      />
    </>
  )
}

type DIRECTION = 'UP' | 'DOWN'
const Directions: Record<DIRECTION, number> = {
  UP: 1,
  DOWN: -1,
}

/**
 * List of layers.
 */
export const Layers: React.FC<StackProps> = ({ sx, ...props }) => {
  const {
    layers,
    selectedLayer,
    setSelectedLayer,
    deleteLayer,
    moveLayer: _moveLayer,
    setLayerDetails,
  } = useContext(TubavContext)

  const moveLayer = (depth: number, direction: DIRECTION) => {
    const newDepth = depth + Directions[direction]
    _moveLayer(depth, newDepth)
    setSelectedLayer(newDepth)
  }

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
            nbLayers={layers.length}
            moveLayerDown={() => moveLayer(layer.depth, 'DOWN')}
            moveLayerUp={() => moveLayer(layer.depth, 'UP')}
            selectLayer={() => setSelectedLayer(layer.depth)}
            key={layer.depth}
            deleteLayer={() => deleteLayer(layer.depth)}
            editLayer={(category: LayerCategory, equipment_id: number) => {
              setLayerDetails({ ...layer, category, equipment_id })
            }}
            toggleVisibility={() =>
              setLayerDetails({ ...layer, visible: !layer.visible })
            }
          />
        )
      })}
    </Stack>
  )
}

const CategoryIcon: React.FC<{ category: Equipment | NonEquipment }> = ({
  category,
}): React.ReactElement | null => {
  switch (category) {
    case 'accessory':
      return <Sunglasses />
    case 'grey':
      return <DotsCircleHorizontal />
    case 'hat':
      return <BrandRedhat />
    case 'shield':
      return <Shield />
    case 'weapon':
      return <Sword />
    case 'body':
      return <Snowman />
  }
  return null
}
