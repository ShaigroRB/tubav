import React from 'react'
import { Paper as MPaper, PaperProps as MPaperProps } from '@mantine/core'
import { getThemeColors } from '../utils/colors'

export type PaperProps = MPaperProps<'div'>

/**
 * Override Paper component from Mantine with default style.
 */
export const Paper: React.FC<PaperProps> = ({ children, ...props }) => {
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
