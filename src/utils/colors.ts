import { DefaultMantineColor, MantineTheme } from '@mantine/core'

/**
 * Get colors depending on dark/light mode.
 */
export const getThemeColors = (
  theme: MantineTheme,
  color: DefaultMantineColor,
  shade: number = 0
) =>
  theme.colorScheme === 'light'
    ? theme.colors[color][0 + shade]
    : theme.colors[color][9 - shade]
