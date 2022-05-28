import { ActionIcon, Box, Button, Center, Group, Stack } from '@mantine/core'
import React from 'react'
import { Download, Repeat } from 'tabler-icons-react'
import { Canvas } from './Canvas'

/**
 * Displays avatar and button to download it.
 */
export const Avatar = () => {
  return (
    <Stack style={{ border: '3px solid red' }} justify="center">
      <Box style={{ flex: 3, textAlign: 'center' }}>
        <Canvas id="ub-avatar" />
      </Box>
    </Stack>
  )
}
