import {
  Box,
  Center,
  ColorScheme,
  ColorSchemeProvider,
  Divider,
  Group,
  MantineProvider,
  Stack,
} from '@mantine/core'
import { useState } from 'react'
import { Avatar, Footer, Layers } from './sections'
import { Layer } from './sections/Layer'

function App() {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('dark')
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'))

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        theme={{ colorScheme }}
        withGlobalStyles
        withNormalizeCSS
      >
        <Stack spacing="md" justify="center" style={{ padding: '1.5rem' }}>
          <Stack justify="center">
            <Avatar />
          </Stack>

          <Group spacing="sm" grow>
            <Layers />

            <Layer />
          </Group>

          <Stack style={{ height: '1.75rem' }}>
            <Footer />
          </Stack>
        </Stack>
      </MantineProvider>
    </ColorSchemeProvider>
  )
}

export default App
