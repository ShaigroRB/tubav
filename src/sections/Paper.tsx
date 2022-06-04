import React from 'react'
import { Paper as MPaper, PaperProps as MPaperProps } from '@mantine/core'
import { getThemeColors } from '../utils/colors'

type PaperProps = MPaperProps<'div'> & {
  children?: React.ReactNode
}

/**
 * Override Paper component from Mantine with default style.
 * : PaperProps & { children: React.ReactElement }
 */
export const Paper = React.forwardRef(
  ({ children, ...props }: PaperProps, ref: React.Ref<HTMLDivElement>) => {
    return (
      <MPaper
        ref={ref}
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
  },
)
