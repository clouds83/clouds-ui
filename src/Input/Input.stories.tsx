import type { Meta, StoryObj } from '@storybook/react'
import { Input, InputProps } from './Input'

const meta: Meta<InputProps> = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    docs: {
      description: {
        component: 'Input component',
      },
    },
  },
}

export default meta

type Story = StoryObj<InputProps>

export const Default: Story = {
  args: {
    type: 'email',
    placeholder: 'Placeholder...',
    pill: false,
    className: '',
  },
}
