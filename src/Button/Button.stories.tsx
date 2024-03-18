import type { Meta, StoryObj } from '@storybook/react'
import Button, { ButtonProps } from './Button'
import Icon from '../_Mock/Icon/Icon'

const meta: Meta<ButtonProps> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    docs: {
      description: {
        component: 'A customizable button component.',
      },
    },
  },
}

export default meta

type Story = StoryObj<ButtonProps>

export const Default: Story = {
  args: {
    children: 'Button',
    variant: 'primary',
    size: 'md',
    pill: false,
  },
}

export const Destructive: Story = {
  args: {
    children: 'Destructive Button',
    variant: 'destructive',
    size: 'md',
    pill: false,
  },
}

export const Outline: Story = {
  args: {
    children: 'Outline Button',
    variant: 'outline',
    size: 'md',
    pill: false,
  },
}

export const Secondary: Story = {
  args: {
    children: 'Secondary Button',
    variant: 'secondary',
    size: 'md',
    pill: false,
  },
}

export const Ghost: Story = {
  args: {
    children: 'Ghost Button',
    variant: 'ghost',
    size: 'md',
    pill: false,
  },
}

export const Link: Story = {
  args: {
    children: 'Link Button',
    variant: 'link',
    size: 'md',
    pill: false,
  },
}

export const ExtraSmall: Story = {
  args: {
    children: 'Extra Small',
    size: 'xs',
    pill: false,
  },
}

export const Small: Story = {
  args: {
    children: 'Small Button',
    size: 'sm',
    pill: false,
  },
}

export const Large: Story = {
  args: {
    children: 'Large Button',
    size: 'lg',
    pill: false,
  },
}

export const WithIcon: Story = {
  args: {
    children: 'With Icon',
    variant: 'primary',
    size: 'md',
    pill: false,
    Icon: <Icon color='fill-white' />,
  },
}

export const WithIconRight: Story = {
  args: {
    children: 'Icon Right',
    variant: 'primary',
    size: 'md',
    pill: false,
    Icon: <Icon color='fill-white' />,
    iconRight: true,
  },
}

export const IconOnly: Story = {
  args: {
    variant: 'primary',
    size: 'icon',
    pill: false,
    Icon: <Icon color='fill-white' />,
  },
}
