import {
  ColorScheme,
  ColorSchemeProvider,
  Group,
  MantineProvider,
  Stack,
} from '@mantine/core'
import { useState } from 'react'
import { Avatar, Footer, Layers, Layer } from './sections'
import { TubavContextProvider } from './TubavContext'
import { getThemeColors } from './utils/colors'

/**
 * Set the providers and the layout between the avatar and the layers.
 */
function App() {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('light')
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
          <Stack
            spacing="md"
            justify="center"
            sx={(theme) => ({
              backgroundColor: getThemeColors(theme, 'gray'),
              padding: '1.5rem',
            })}
          >
            <Group grow>
              <Stack justify="center">
                <Avatar />
              </Stack>

              <Stack spacing="sm">
                <Layers />

                <Layer />
              </Stack>
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
