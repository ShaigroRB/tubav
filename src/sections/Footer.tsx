import { Anchor, Box, Divider, Group, Text } from '@mantine/core'
import React from 'react'

/**
 * Displays a link to the Github repository, a button to switch themes and copyright.
 */
export const Footer: React.FC = () => {
  return (
    <Box>
      <Divider sx={{ height: 1 }} />

      <Group position="apart" my="xs" role="contentinfo">
        <Text size="xs">
          Remake of{' '}
          <Anchor
            href="https://www.ediogames.com/fr/users/nubgenerator"
            target="_blank"
            size="xs"
            role="link"
          >
            The Ultimatest Battle nubgenerator
          </Anchor>
        </Text>

        <Text size="xs">© 2023 Shaigro</Text>
      </Group>
    </Box>
  )
}
