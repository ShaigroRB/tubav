import { useMediaQuery } from '@mantine/hooks'

/**
 * If smaller than my laptop screen size, then everything no group.
 */
export const useLargeScreen = () => useMediaQuery('(min-width: 1366px)')
