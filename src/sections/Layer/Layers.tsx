import {
  ActionIcon,
  Box,
  Button,
  Group,
  MantineTheme,
  Stack,
  Text,
} from '@mantine/core'
import React, { useContext, useMemo } from 'react'
import {
  ArrowsShuffle,
  Eye,
  EyeOff,
  GripVertical,
  Plus,
  Refresh,
  Trash,
} from 'tabler-icons-react'
import { TubavContext } from '../../TubavContext'
import { Layer } from '../../types'
import { getThemeColors } from '../../utils/colors'
import { Paper } from '../Paper'
import { List, arrayMove, IItemProps } from 'react-movable'

type LayerItemProps = Layer & {
  isSelected: boolean
  selectLayer: () => void
  deleteLayer: () => void
  toggleVisibility: () => void
}

/**
 * Item component for a layer.
 */
const LayerItem = React.forwardRef(
  (
    {
      depth,
      name,
      category,
      visible,
      isSelected,
      selectLayer,
      deleteLayer,
      toggleVisibility,
      ...props
    }: LayerItemProps & IItemProps,
    ref: React.Ref<HTMLDivElement>,
  ) => (
    <Paper
      ref={ref}
      onClick={selectLayer}
      sx={(theme: MantineTheme) => ({
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
      {...props}
    >
      <Group>
        <Text sx={{ flex: 3 }}>{name}</Text>
        <Text>{depth}</Text>
        <ActionIcon
          variant="transparent"
          sx={{
            ':hover': {
              cursor: 'grab',
            },
            ':active': {
              cursor: 'grabbing',
            },
          }}
        >
          <GripVertical />
        </ActionIcon>
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
  ),
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
    resetLayers,
    deleteLayer,
    setLayerDetails,
    moveLayer,
  } = useContext(TubavContext)

  return (
    <Group>
      <List
        lockVertically
        values={layers}
        onChange={({ oldIndex, newIndex }) => moveLayer(oldIndex, newIndex)}
        renderList={({ children, props }) => (
          <Stack
            py="sm"
            style={{
              overflow: 'auto',
              flexDirection: 'column',
              flex: 2,
            }}
            {...props}
          >
            {children}
          </Stack>
        )}
        renderItem={({ value: layer, props }) => {
          if (layer.category === 'empty') {
            return null
          }

          const isSelected = layer.depth === selectedLayer

          return (
            <LayerItem
              {...layer}
              isSelected={isSelected}
              selectLayer={() => setSelectedLayer(layer.depth)}
              deleteLayer={() => deleteLayer(layer.depth)}
              toggleVisibility={() =>
                setLayerDetails({ ...layer, visible: !layer.visible })
              }
              {...props}
              key={layer.depth}
            />
          )
          // return <TempLayerItem {...props}>{layer}</TempLayerItem>
        }}
      />
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
