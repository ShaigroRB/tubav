import { Box, Button, Group, Stack } from '@mantine/core'
import React, { useContext } from 'react'
import { Download } from 'tabler-icons-react'
import { TubavContext } from '../../TubavContext'
import { useLargeScreen } from '../../useLargeScreen'
import { Canvas } from './Canvas'

/**
 * Displays avatar and button to download it.
 */
export const Avatar = () => {
  const { downloadAvatar } = useContext(TubavContext)
  const largeScreen = useLargeScreen()

  return (
    <Stack justify="center" align="center">
      <Box style={{ flex: 3 }}>
        {largeScreen ? (
          <Canvas id="ub-avatar" />
        ) : (
          <Canvas id="ub-avatar" zoomScale={0.75} />
        )}
      </Box>

      <Group sx={{ flex: 1 }}>
        <Button onClick={downloadAvatar} rightIcon={<Download />}>
          Download
        </Button>
      </Group>
    </Stack>
  )
}
