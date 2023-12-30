import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import ToggleSwitch from './ToggleSwitch' // Ensure this import points to your new toggle switch component

const meta: Meta<typeof ToggleSwitch> = {
  title: 'Components/ToggleSwitch', // Updated title
  component: ToggleSwitch,
}

export default meta

type Story = StoryObj<typeof ToggleSwitch>

export const Default: Story = {
  args: {},
}

export const WithLabel: Story = {
  args: {
    label: 'Subscribe to Newsletter',
  },
}

export const Disabled: Story = {
  args: {
    label: 'Disabled Toggle Switch',
    disabled: true,
  },
}

export const CheckedByDefault: Story = {
  args: {
    label: 'Checked by Default',
    defaultChecked: true,
  },
}

export const LabelOnLeft: Story = {
  args: {
    label: 'Label on left',
    labelOnLeft: true,
  },
}

export const SpaceBetween: Story = {
  args: {
    label: 'Label on left',
    labelOnLeft: true,
    spaceBetween: true,
  },
}
