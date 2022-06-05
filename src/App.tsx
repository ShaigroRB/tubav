import {
  ColorScheme,
  ColorSchemeProvider,
  Group,
  MantineProvider,
  Stack,
} from '@mantine/core'
import React, { useEffect, useState } from 'react'
import { Avatar, Footer, Layers, LayerDetails } from './sections'
import { TubavContextProvider } from './TubavContext'
import { getThemeColors } from './utils/colors'

/**
 * Hook to get the dark/light mode from local storage.
 * Returns dark mode by default.
 */
const useDarkMode = (): [
  ColorScheme,
  React.Dispatch<React.SetStateAction<ColorScheme>>,
] => {
  const item = localStorage.getItem('darkMode')
  const [darkMode, setDarkMode] = useState<ColorScheme>(
    item ? (item as ColorScheme) : 'dark',
  )

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode)
  }, [darkMode])

  return [darkMode, setDarkMode]
}

/**
 * Set the providers and the layout between the avatar and the layers.
 */
function App() {
  const [darkMode, setDarkMode] = useDarkMode()
  const [colorScheme, setColorScheme] = useState<ColorScheme>(darkMode)
  const toggleColorScheme = (value?: ColorScheme) => {
    const newColorScheme = value || (colorScheme === 'dark' ? 'light' : 'dark')
    setColorScheme(newColorScheme)
    setDarkMode(newColorScheme)
  }

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

                <LayerDetails />
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
