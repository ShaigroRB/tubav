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
import { useLargeScreen } from '../../useLargeScreen'
import { getThemeColors } from '../../utils/colors'
import { Equipment, NonEquipment } from '../../utils/equipments'
import { getEquipmentName } from '../../utils/equipments/utils'
import { Paper, PaperProps } from '../Paper'
import { LayerEditionModal } from './LayerEditionModal'

const TruncatedText: React.FC<{ text: string }> = ({ text }) => {
  const largeScreen = useLargeScreen()
  return (
    <Text
      size={largeScreen ? 'md' : 'sm'}
      sx={{
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        width: largeScreen ? '10rem' : '6rem',
      }}
    >
      {text}
    </Text>
  )
}

type LayerItemProps = Layer &
  PaperProps & {
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
  ...props
}) => {
  const [opened, { open: openModal, close: closeModal }] = useDisclosure(false)
  const largeScreen = useLargeScreen()
  const iconSize = largeScreen ? 22 : 20

  return (
    <>
      <Paper
        onDoubleClickCapture={openModal}
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
          height: largeScreen ? '3rem' : '2.5rem',
          cursor: 'pointer',
        })}
        {...props}
      >
        <Group>
          <ThemeIcon
            size={iconSize}
            color="teal"
            variant="light"
            aria-label="Category of the current layer"
          >
            <CategoryIcon category={category} />
          </ThemeIcon>
          {category !== 'body' && (
            <TruncatedText text={getEquipmentName(equipment_id)} />
          )}
          <Group spacing="xs" sx={{ flexWrap: 'nowrap', marginLeft: 'auto' }}>
            <ActionIcon
              size={iconSize}
              disabled={depth + 1 === nbLayers - 1}
              onClick={moveLayerUp}
              title="Move layer up"
            >
              <ArrowUp />
            </ActionIcon>
            <ActionIcon
              size={iconSize}
              disabled={depth === 0}
              onClick={moveLayerDown}
              title="Move layer down"
            >
              <ArrowDown />
            </ActionIcon>
            <ActionIcon
              disabled={category === 'body'}
              size={iconSize}
              onClick={openModal}
              title="Edit layer"
            >
              <Edit />
            </ActionIcon>
            <ActionIcon
              size={iconSize}
              onClick={toggleVisibility}
              title={visible ? 'Hide layer' : 'Show layer'}
            >
              {visible ? <Eye /> : <EyeOff />}
            </ActionIcon>
            <ActionIcon
              disabled={category === 'body'}
              size={iconSize}
              onClick={(event: any) => {
                deleteLayer()
                // no need to select the item
                event.stopPropagation()
              }}
              title="Delete layer"
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
            aria-label={`Layer at depth ${layer.depth}`}
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
      return <Sunglasses aria-label="Accessory" />
    case 'grey':
      return <DotsCircleHorizontal aria-label="Miscellaneous" />
    case 'hat':
      return <BrandRedhat aria-label="Hat" />
    case 'shield':
      return <Shield aria-label="Shield" />
    case 'weapon':
      return <Sword aria-label="Weapon" />
    case 'body':
      return <Snowman aria-label="Body of the avatar" />
  }
  return null
}
