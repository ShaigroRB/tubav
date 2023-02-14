import {
  ActionIcon,
  Anchor,
  Box,
  Group,
  Text,
  useMantineColorScheme,
} from '@mantine/core'
import React from 'react'
import { BrandGithub, Moon, Sun } from 'tabler-icons-react'

/**
 * Topbar with name of the app, github repo & some settings.
 */
export const Topbar: React.FC = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme()
  const dark = colorScheme === 'dark'

  return (
    <Box role="banner">
      <Group position="apart">
        <Text size="xl">TUBav</Text>

        <Group>
          <Anchor
            href="https://github.com/ShaigroRB/tubav"
            target="_blank"
            role="link"
          >
            <ActionIcon
              variant="hover"
              title="Open GitHub repository in a new tab"
            >
              <BrandGithub />
            </ActionIcon>
          </Anchor>
          <ActionIcon
            variant="hover"
            color={dark ? 'yellow' : 'blue'}
            onClick={() => toggleColorScheme()}
            title={`Toggle color scheme to ${dark ? 'light' : 'dark'} mode`}
          >
            {dark ? <Sun /> : <Moon />}
          </ActionIcon>
        </Group>
      </Group>
    </Box>
  )
}
