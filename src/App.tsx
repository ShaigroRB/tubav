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
import { Footer } from './sections/Footer'

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
          <Stack justify="center" style={{ backgroundColor: 'red' }}>
            <Center>canvas</Center>
          </Stack>
          <Group spacing="sm" grow>
            <Box style={{ backgroundColor: 'green' }}>
              <Center>list of layers</Center>
            </Box>

            <Box style={{ backgroundColor: 'blue' }}>
              <Center>layer details</Center>
            </Box>
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
