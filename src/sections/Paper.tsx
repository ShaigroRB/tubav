import React from 'react'
import { Paper as MPaper, PaperProps as MPaperProps } from '@mantine/core'
import { getThemeColors } from '../utils/colors'

/**
 * Override Paper component from Mantine with default style.
 */
export const Paper: React.FC<MPaperProps<'div'>> = ({ children, ...props }) => {
  return (
    <MPaper
      shadow="xs"
      p="xs"
      sx={(theme) => ({
        backgroundColor: getThemeColors(theme, 'gray', 1),
      })}
      {...props}
    >
      {children}
    </MPaper>
  )
}
