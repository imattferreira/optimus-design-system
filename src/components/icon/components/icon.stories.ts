import type { Meta, StoryObj } from '@storybook/react';
import Icon from './icon';

const meta = {
  title: 'Display/Icon',
  component: Icon,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  args: {
    color: {
      light: '',
      dark: ''
    },
    name: 'activity',
    size: 'size1',
  }
} satisfies Meta<typeof Icon>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'alarm-clock'
  }
}

export default meta;
