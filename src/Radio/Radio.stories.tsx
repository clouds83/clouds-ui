import type { Meta, StoryObj } from '@storybook/react'

import Radio from './Radio' // Import the Radio component

const meta: Meta<typeof Radio> = {
  title: 'Components/Radio',
  component: Radio,
}

export default meta

type Story = StoryObj<typeof Radio>

export const Default: Story = {
  args: {},
}

export const WithLabel: Story = {
  args: {
    label: 'Option A',
  },
}

export const Disabled: Story = {
  args: {
    label: 'Disabled Radio',
    disabled: true,
  },
}

export const CheckedByDefault: Story = {
  args: {
    label: 'Selected by Default',
    defaultChecked: true,
  },
}

export const LabelOnLeft: Story = {
  args: {
    label: 'Label on Left',
    labelOnLeft: true,
  },
}
