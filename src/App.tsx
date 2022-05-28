import {
  ColorScheme,
  ColorSchemeProvider,
  Group,
  MantineProvider,
  Stack,
} from '@mantine/core'
import { useState } from 'react'
import { Avatar, Footer, Layers } from './sections'
import { Layer } from './sections/Layer'
import { TubavContextProvider } from './TubavContext'

/**
 * Set the providers and the layout between the avatar and the layers.
 */
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
        <TubavContextProvider>
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
        </TubavContextProvider>
      </MantineProvider>
    </ColorSchemeProvider>
  )
}

export default App
