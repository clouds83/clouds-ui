import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import Checkbox from './Checkbox'

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
}

export default meta

type Story = StoryObj<typeof Checkbox>

export const Default: Story = {
  args: {
    // Default checkbox without any additional props
  },
}

export const WithLabel: Story = {
  args: {
    label: 'Subscribe to Newsletter',
  },
}

export const CustomClass: Story = {
  args: {
    label: 'Custom Styled Checkbox',
    customClass: 'my-custom-class', // Assuming you have this class defined in your styles
  },
}

// Add more stories to demonstrate other props like `disabled`, `checked`, etc.
export const Disabled: Story = {
  args: {
    label: 'Disabled Checkbox',
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
