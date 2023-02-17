import { Box, Button, Group, Stack } from '@mantine/core'
import { useContext } from 'react'
import { Download } from 'tabler-icons-react'
import { TubavContext } from '../../TubavContext'
import { useLargeScreen } from '../../useLargeScreen'
import { RenderingLayersCanvas } from './RenderingLayersCanvas'

/**
 * Displays avatar and button to download it.
 */
export const Avatar = () => {
  const { downloadAvatar, layers, setAvatarDataURL } = useContext(TubavContext)
  const largeScreen = useLargeScreen()

  return (
    <Stack justify="center" align="center">
      <Box style={{ flex: 3 }}>
        {largeScreen ? (
          <RenderingLayersCanvas
            aria-label="Avatar generated"
            id="ub-avatar"
            layers={layers}
            setAvatarDataURL={setAvatarDataURL}
          />
        ) : (
          <RenderingLayersCanvas
            aria-label="Avatar generated"
            id="ub-avatar"
            layers={layers}
            setAvatarDataURL={setAvatarDataURL}
            zoomScale={0.75}
          />
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
