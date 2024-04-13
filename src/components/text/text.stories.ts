import type { Meta, StoryObj } from '@storybook/react';
import Text from './text';

const meta = {
  title: 'Typography/Text',
  component: Text,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  args: {
    as: 'p',
    color: {
      light: '',
      dark: ''
    },
    size: 'size1',
    children: 'Hello World!'
  }
} satisfies Meta<typeof Text>;

type Story = StoryObj<typeof meta>;

export const Common: Story = {
  args: { }
}

export const Bold: Story = {
  args: {
    bold: true
  }
}

export const Italic: Story = {
  args: {
    italic: true
  }
}

export default meta;
