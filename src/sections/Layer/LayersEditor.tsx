import React from 'react'
import { Group } from '@mantine/core'
import { LayerActions } from './LayerActions'
import { Layers } from './Layers'

/**
 * Editor of the layers.
 *
 * User can arrange and edit layers as he wants to produce
 * different avatars.
 */
export const LayersEditor: React.FC = () => (
  <Group sx={{ maxHeight: '32rem', minHeight: '32rem' }}>
    <Layers sx={{ flex: 3 }} />
    <LayerActions />
  </Group>
)

/**
 * Editor for smaller viewports.
 */
export const MobileLayersEditor: React.FC = () => (
  <React.Fragment>
    <Layers />
    <LayerActions />
  </React.Fragment>
)
