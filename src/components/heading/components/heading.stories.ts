import type { Meta, StoryObj } from '@storybook/react';
import Heading from './heading';

const meta = {
  title: 'Typography/Heading',
  component: Heading,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  args: {
    as: 'h2',
    color: {
      light: '',
      dark: ''
    },
    size: 'size2',
    children: 'Hello World!'
  }
} satisfies Meta<typeof Heading>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { }
}

export default meta;
