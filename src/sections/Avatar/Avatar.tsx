import { ActionIcon, Box, Button, Center, Group, Stack } from '@mantine/core'
import React, { useContext } from 'react'
import { Download, Repeat } from 'tabler-icons-react'
import { TubavContext } from '../../TubavContext'
import { Canvas } from './Canvas'

/**
 * Displays avatar and button to download it.
 */
export const Avatar = () => {
  const { downloadAvatar } = useContext(TubavContext)

  return (
    <Stack style={{ border: '3px solid red' }} justify="center">
      <Box style={{ flex: 3, textAlign: 'center' }}>
        <Canvas id="ub-avatar" />
      </Box>

      <Group style={{ flex: 1 }} position="center">
        <Button onClick={downloadAvatar} rightIcon={<Download />}>
          Download
        </Button>
      </Group>
    </Stack>
  )
}
