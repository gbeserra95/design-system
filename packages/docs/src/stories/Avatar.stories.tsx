import type { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarProps } from '@gabriel-beserra-design-system-ui/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/gbeserra95.png',
    alt: 'Gabriel Beserra',
  },
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
