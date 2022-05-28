import {
  ActionIcon,
  Anchor,
  Box,
  Center,
  Divider,
  Group,
  Text,
  useMantineColorScheme,
} from '@mantine/core'
import React from 'react'
import { BrandGithub, Moon, Sun } from 'tabler-icons-react'

export const Footer: React.FC = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme()
  const dark = colorScheme === 'dark'

  return (
    <Box>
      <Divider style={{ height: 3 }} />

      <Group grow my="xs">
        <Group position="left">
          TUBav
          <Anchor href="https://github.com/ShaigroRB/tubav" target="_blank">
            <ActionIcon variant="default">
              <BrandGithub />
            </ActionIcon>
          </Anchor>
        </Group>

        <Box>
          <Center>
            <ActionIcon
              variant="hover"
              color={dark ? 'yellow' : 'blue'}
              onClick={() => toggleColorScheme()}
              title="Toggle color scheme"
            >
              {dark ? <Sun /> : <Moon />}
            </ActionIcon>
          </Center>
        </Box>

        <Text style={{ textAlign: 'end' }}>© 2022 - Robin Boucher</Text>
      </Group>
    </Box>
  )
}
