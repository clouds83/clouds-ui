import type { Meta, StoryObj } from '@storybook/react'
import Button, { ButtonProps } from './Button'
import Icon from '../_mock/Icon/Icon'

const meta: Meta<ButtonProps> = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'outline', 'ghost', 'link', 'destructive'],
      control: {
        type: 'select',
      },
    },
    size: {
      options: ['xs', 'sm', 'md', 'lg', 'icon'],
      control: {
        type: 'select',
      },
    },
    roundness: {
      options: [
        'rounded-none',
        'rounded-sm',
        'rounded',
        'rounded-md',
        'rounded-lg',
        'rounded-xl',
        'rounded-2xl',
        'rounded-full',
      ],
      control: {
        type: 'select',
      },
    },
    iconRight: {
      control: {
        type: 'boolean',
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
    roundness: 'rounded-md',
  },
}

export const Destructive: Story = {
  args: {
    children: 'Destructive Button',
    variant: 'destructive',
    size: 'md',
    roundness: 'rounded-md',
  },
}

export const Outline: Story = {
  args: {
    children: 'Outline Button',
    variant: 'outline',
    size: 'md',
    roundness: 'rounded-md',
  },
}

export const Secondary: Story = {
  args: {
    children: 'Secondary Button',
    variant: 'secondary',
    size: 'md',
    roundness: 'rounded-md',
  },
}

export const Ghost: Story = {
  args: {
    children: 'Ghost Button',
    variant: 'ghost',
    size: 'md',
    roundness: 'rounded-md',
  },
}

export const Link: Story = {
  args: {
    children: 'Link Button',
    variant: 'link',
    size: 'md',
    roundness: 'rounded-md',
  },
}

export const ExtraSmall: Story = {
  args: {
    children: 'Extra Small',
    size: 'xs',
    roundness: 'rounded-md',
  },
}

export const Small: Story = {
  args: {
    children: 'Small Button',
    size: 'sm',
    roundness: 'rounded-md',
  },
}

export const Large: Story = {
  args: {
    children: 'Large Button',
    size: 'lg',
    roundness: 'rounded-md',
  },
}

export const WithIcon: Story = {
  args: {
    children: 'With Icon',
    variant: 'primary',
    size: 'md',
    roundness: 'rounded-md',
    Icon: <Icon />,
  },
}

export const WithIconRight: Story = {
  args: {
    children: 'Icon Right',
    variant: 'primary',
    size: 'md',
    roundness: 'rounded-md',
    iconRight: true,
    Icon: <Icon />,
  },
}

export const IconOnly: Story = {
  args: {
    variant: 'primary',
    size: 'xs',
    roundness: 'rounded-md',
    Icon: <Icon />,
  },
}

export const PillShaped: Story = {
  args: {
    children: 'Pill Shaped',
    variant: 'primary',
    size: 'md',
    roundness: 'rounded-full',
  },
}
