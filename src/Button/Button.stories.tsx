import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import Button from './Button'
import Icon from '../_Mock/Icon/Icon'

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
}

export default meta

type Story = StoryObj<typeof Button>

export const Default: Story = {
  args: {
    children: 'Button',
  },
}

export const WithIcon: Story = {
  args: {
    children: 'Button',
    icon: <Icon />,
  },
}

export const WithIconRight: Story = {
  args: {
    children: 'Button',
    iconRight: true,
    icon: <Icon />,
  },
}

export const Primary: Story = {
  args: {
    children: 'Primary',
    color: 'primary',
  },
}

export const Success: Story = {
  args: {
    children: 'Success',
    color: 'success',
  },
}

export const Destructive: Story = {
  args: {
    children: 'Destructive',
    color: 'destructive',
  },
}

export const Outlined: Story = {
  args: {
    children: 'Outlined',
    variant: 'outlined',
  },
}

export const LinkStyle: Story = {
  args: {
    children: 'Link',
    variant: 'link',
  },
}

export const IconOnly: Story = {
  args: {
    icon: <Icon />,
    iconOnly: true,
  },
}

export const Small: Story = {
  args: {
    children: 'Small',
    size: 'sm',
  },
}

export const Large: Story = {
  args: {
    children: 'Large',
    size: 'lg',
  },
}

export const CustomBorderRadius: Story = {
  args: {
    children: 'Pill',
    borderRadius: 'pill',
  },
}
