import {
  ColorScheme,
  ColorSchemeProvider,
  Group,
  MantineProvider,
  Stack,
} from '@mantine/core'
import React, { useEffect, useState } from 'react'
import {
  Avatar,
  Footer,
  LayersEditor,
  MobileLayersEditor,
  Topbar,
} from './sections'
import { TubavContextProvider } from './TubavContext'
import { useLargeScreen } from './useLargeScreen'

/**
 * Hook to get the dark/light mode from local storage.
 * Returns dark mode by default.
 */
const useDarkMode = (): [
  ColorScheme,
  React.Dispatch<React.SetStateAction<ColorScheme>>
] => {
  const item = localStorage.getItem('darkMode')
  const [darkMode, setDarkMode] = useState<ColorScheme>(
    item ? (item as ColorScheme) : 'dark'
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
  const largeScreen = useLargeScreen()

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
              paddingTop: '1rem',
              paddingLeft: '1rem',
              paddingRight: '1rem',
            })}
          >
            <Topbar />
            {largeScreen ? (
              <Group grow role="main">
                <Stack
                  justify="center"
                  role="region"
                  aria-label="Generated avatar and button to download it"
                >
                  <Avatar />
                </Stack>

                <Stack
                  spacing="sm"
                  role="region"
                  aria-label="Actions on the different layers of the avatar"
                >
                  <LayersEditor />
                </Stack>
              </Group>
            ) : (
              <Stack role="main">
                <Stack
                  justify="center"
                  role="region"
                  aria-label="Generated avatar and button to download it"
                >
                  <Avatar />
                </Stack>

                <Stack
                  spacing="sm"
                  role="region"
                  aria-label="Actions on the different layers of the avatar"
                >
                  <MobileLayersEditor />
                </Stack>
              </Stack>
            )}

            <Footer />
          </Stack>
        </TubavContextProvider>
      </MantineProvider>
    </ColorSchemeProvider>
  )
}

export default App
